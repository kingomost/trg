<?php
namespace travelguard\core;

class UrlStruct {
	
	private $request	= false;
	private $first 		= false;
	private $second 	= false;
	private $third 		= false;
	
	public function __construct () {
		
		$buf_part 		= explode('/',mb_strtolower($_SERVER['REQUEST_URI']));
		$buf_part 		= array_values(array_diff($buf_part, array('', ' ')));
		
		$this->request	= $_SERVER['REQUEST_URI'];
		$this->first 	= count($buf_part)>0 ? current(explode('.',$buf_part[0])) : false;
		$this->second 	= count($buf_part)>1 ? current(explode('.',$buf_part[1])) : false;
		$this->third 	= count($buf_part)>2 ? current(explode('.',$buf_part[2])) : false;
		
	}
	
	public function return_part_url ($name) {
		
		if (isset($this->$name)) return $this->$name;
		return false;
		
	}
	
}

?>