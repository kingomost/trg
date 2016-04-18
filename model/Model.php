<?php
namespace travelguard\model;

class Model {
	
	private $first 		= false;
	private $second 	= false;
	
	public function __construct ($first, $second) {
		
		$this->first 	= $first;
		$this->second 	= $second;
		
	}
	
	public function return_data() {
		
		if ($this->first === 'belay' && dbData::isset_activ_tour($this->second)) {
			$array 							= [];
			$array['data_tour'] 			= dbData::data_tour($this->second);
			$array['data_people'] 			= dbData::data_people($this->second);
			return $array;
		} elseif (isset($_POST['ID']) && dbData::isset_activ_tour($_POST['ID'])) {
			return ['link' => 'http://'.\DOMAIN.'/belay/'.$_POST['ID']];
		} elseif ($this->first === 'belay' || isset($_POST['ID'])) {
			return ['message' => 'This tour is no active.'];
		} else  {
			return ['tour_ID' => dbData::array_activ_tour()];
		}
		
	}
	
	private function link_travelguard($array) {
		
		return true;
		
	}
	
	
}
?>