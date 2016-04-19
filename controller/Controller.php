<?php
namespace travelguard\controller;

use travelguard\model\dbData;

class Controller {
	
	private $first 		= false;
	private $second 	= false;
	
	public function __construct ($first, $second) {
		
		$this->first 	= $first;
		$this->second 	= $second;
		
	}
	
	public function return_action() {
		
		if ($this->first === 'belay' && dbData::isset_activ_tour($this->second)) {
			return 'belay';
		} elseif (isset($_POST['ID']) && dbData::isset_activ_tour($_POST['ID'])) {
			return 'belay_link';
		} elseif ($this->first === 'belay' || isset($_POST['ID'])) {
			return 'no_activ_tour';
		} elseif ($this->first === 'ajax' || isset($_POST['SECRET'])) {
			return 'secret';
		} else  {
			return 'form_select_id';
		}	
		
	}
	
}
?>