<?php
	if (isset($this->data['link']) && is_string($this->data['link'])) {
		?>
			<a href="<?=$this->data['link']?>"><?=$this->data['link']?></a>
		<?php
	} else {
		print_r ($this->data['link']);
	}
?>