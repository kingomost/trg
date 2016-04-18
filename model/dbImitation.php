<?php
namespace travelguard\model;

trait dbImitation {
	
	public static $activ_tour = [
									15,
									16,
									17,
							];
	public static $data_tour = [
									15 => [
											'from_country' => '2',
											'from_state' => '52',
											'to_country' => '1',
											'to_state' => '4',
											'time_start' => '07/23/2016',//mm/dd/yyyy
											'time_end' => '08/23/2016',
										],
									16 => [
											'from_country' => '1',
											'from_state' => '34',
											'to_country' => '2',
											'to_state' => '12',
											'time_start' => '05/03/2016',//mm/dd/yyyy
											'time_end' => '05/15/2016',
										],
									17 => [
											'from_country' => '2',
											'from_state' => '48',
											'to_country' => '1',
											'to_state' => '9',
											'time_start' => '05/03/2016',//mm/dd/yyyy
											'time_end' => '05/15/2016',
										],
							];
	public static $people_tour = [
									15 => [
												[
													'first_name' => 'Semen',
													'last_name' => 'Vasilev',
													'birth_date' => '11/22/1966',//mm/dd/yyyy
													'cost' => '876.00',
											],
												[
													'first_name' => 'Elena',
													'last_name' => 'Shestakova',
													'birth_date' => '01/12/1976',//mm/dd/yyyy
													'cost' => '876.00',
											],
										],
									16 => [
												[
													'first_name' => 'Semen',
													'last_name' => 'Vasilev',
													'birth_date' => '11/22/1966',//mm/dd/yyyy
													'cost' => '876.00',
											],
										],
									17 => [
												[
													'first_name' => 'Oleg',
													'last_name' => 'Vasilev',
													'birth_date' => '01/22/1986',//mm/dd/yyyy
													'cost' => '576.00',
											],
												[
													'first_name' => 'Elena',
													'last_name' => 'Vorotinskaia',
													'birth_date' => '01/12/1970',//mm/dd/yyyy
													'cost' => '576.00',
											],
												[
													'first_name' => 'Semen',
													'last_name' => 'Cherepanov',
													'birth_date' => '01/22/1969',//mm/dd/yyyy
													'cost' => '576.00',
											],
												[
													'first_name' => 'Tania',
													'last_name' => 'Kyzmina',
													'birth_date' => '01/12/1983',//mm/dd/yyyy
													'cost' => '576.00',
											],
										],
							];
	
	
}
?>