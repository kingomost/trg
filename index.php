<?php
error_reporting(E_ALL);

define('DIR', __DIR__);
define('DIR_SEPARATOR', '\\');
define('DOMAIN', $_SERVER['SERVER_NAME']);

require_once DIR.DIR_SEPARATOR.'core'.DIR_SEPARATOR.'Autoload.php';
$obj_autoload = new Psr4AutoloaderClass();
$obj_autoload->addNamespace('travelguard\\core\\', DIR.DIR_SEPARATOR.'core');
$obj_autoload->addNamespace('travelguard\\model\\', DIR.DIR_SEPARATOR.'model');
$obj_autoload->addNamespace('travelguard\\view\\', DIR.DIR_SEPARATOR.'view');
$obj_autoload->addNamespace('travelguard\\controller\\', DIR.DIR_SEPARATOR.'controller');
$obj_autoload->register();

$obj_url 			= new \travelguard\core\UrlStruct();
$first 				= $obj_url->return_part_url('first');
$second 			= $obj_url->return_part_url('second');

if ($first === 'look' && isset($_POST)) {
	print_r($_POST);
	exit;
}

$obj_controller 	= new \travelguard\controller\Controller($first, $second);
$obj_model 			= new \travelguard\model\Model($first, $second);
$obj_view			= new \travelguard\view\View($obj_controller->return_action(), $obj_model->return_data());

echo $obj_view->return_view();
?>