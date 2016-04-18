<?php
if ($this->data!==false && is_array($this->data['tour_ID']) && count($this->data['tour_ID'])>0) {
	?>
	<form action="" method="post">
		<select name="ID">
		<option disabled>Select ID</option>
	<?php
		for ($i=0; $i<count($this->data['tour_ID']); $i++) {
			?>
				<option value="<?=$this->data['tour_ID'][$i]?>">ID: <?=$this->data['tour_ID'][$i]?></option>
			<?php
		}
	?>
		</select>
		<input type="submit" value="Create link">
	</form>
	<?php
} else {
	?>
	<h2>No ID available!</h2>
	<?php
}
?>