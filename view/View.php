<?php
namespace travelguard\view;

use travelguard\view\HtmlBlock;

class View {
	
	private $action 		= false;
	private $data 			= false;
	
	public function __construct ($action, $data) {
		
		$this->action 		= $action;
		$this->data 		= $data;
		
	}
	
	public function return_view() {
		
		if (method_exists($this, $this->action)) return $this->{$this->action}();
		return $this->error();
		
	}
	
	private function belay() {
		
		ob_start();
		include (DIR.DIR_SEPARATOR.'template'.DIR_SEPARATOR.'Silver_All_Inclusive_Package.php');
		$result = ob_get_contents();
		ob_end_clean();
		
		//print_r ($this->data);
		
		return $result;
		
	}
	
	private function belay_link() {
		
		ob_start();
		include (DIR.DIR_SEPARATOR.'template'.DIR_SEPARATOR.'href.php');
		$block = ob_get_contents();
		ob_end_clean();
		
		ob_start();
		include (DIR.DIR_SEPARATOR.'template'.DIR_SEPARATOR.'layer_0.php');
		$result = ob_get_contents();
		ob_end_clean();
		
		return $result;
		
	}
	
	private function no_activ_tour() {
		
		$block = '<h1>This tour is not active!</h1>';
		
		ob_start();
		include (DIR.DIR_SEPARATOR.'template'.DIR_SEPARATOR.'layer_0.php');
		$result = ob_get_contents();
		ob_end_clean();
		
		return $result;
		
	}
	
	private function form_select_id() {
		
		ob_start();
		include (DIR.DIR_SEPARATOR.'template'.DIR_SEPARATOR.'form_select_id.php');
		$block = ob_get_contents();
		ob_end_clean();
		
		ob_start();
		include (DIR.DIR_SEPARATOR.'template'.DIR_SEPARATOR.'layer_0.php');
		$result = ob_get_contents();
		ob_end_clean();
		
		return $result;
		
	}
	
	private function error() {
		
		$block = '<h1>Unknown error!</h1>';
		
		ob_start();
		include (DIR.DIR_SEPARATOR.'template'.DIR_SEPARATOR.'layer_0.php');
		$result = ob_get_contents();
		ob_end_clean();
		
		return $result;
		
	}
	
	private function secret() {
		
		$resalt = \travelguard\core\SetCurl::return_resalt ($_POST['SECRET'], null, null, null);
		preg_match_all("~\<input type=\"hidden\" name=\"__VIEWSTATE\" id=\"__VIEWSTATE\" value=\"([^\"]*)\"~isU", $resalt, $buf);
		$key_0 = $buf[1][0];
		preg_match_all("~\<input type=\"hidden\" name=\"__EVENTVALIDATION\" id=\"__EVENTVALIDATION\" value=\"([^\"]*)\"~isU", $resalt, $buf);
		$key_1 = $buf[1][0];
		$arr = json_encode(['key_0' => $key_0, 'key_1' => $key_1]);
		print_r($arr);
		exit;
		
	}
	
}
?>