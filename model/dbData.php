<?php
namespace travelguard\model;

use travelguard\model\dbImitation;

class dbData {
	
	public static function isset_activ_tour ($tour_id) {
		
		//ПРОВЕРКА, ЧТО ТАКОЙ ТУР ЗАКАЗАН И ЧТО ПО ВРЕМЕНИ ОН ЕЩЕ НЕ НАЧАЛСЯ
		if (in_array($tour_id, dbImitation::$activ_tour)) return true;
		return false;
		
	}
	
	public static function array_activ_tour () {
		
		//СПИСОК ID ВСЕХ АКТИВНЫХ НА ЭТОТ МОМЕНТ ТУРОВ
		return dbImitation::$activ_tour;
		
	}
	
	public static function data_tour ($tour_id) {
		
		//ПОЛНАЯ ВЫБОРКА ПО ТУРУ - ВКЛЮЧАЯ ДАННЫЕ О ЛЮДЯХ
		if (is_array(dbImitation::$data_tour[$tour_id])) return dbImitation::$data_tour[$tour_id];
		return false;
		
	}
	
	public static function data_people ($tour_id) {
		
		//ПОЛНАЯ ВЫБОРКА ПО ТУРУ - ПО ЛЮДЯМ
		if (is_array(dbImitation::$people_tour[$tour_id])) return dbImitation::$people_tour[$tour_id];
		return false;
		
	}
	
}

?>