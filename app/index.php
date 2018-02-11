<?php
include("/php/core.php");
?>
<!DOCTYPE html>
<html>
<head>
	<title>Index</title>
	<?php include("/includes/head.php"); ?>
	<style media="screen">
		<?php include("/css/index.css"); ?>
	</style>
</head>
<body>
<div class="wrapper">

	<!-- Header -->
	<div class="header">
		<h1>Card Counter</h1>
	</div>

	<!-- Cards -->
	<?php $id = 0; for ($h = 13; $h > 0; $h--) { for ($i = 0; $i < 4; $i++) { ?>
		<div class="card" id="<?php echo ++$id; ?>">
			<div class="cont">
				<h1>
				<?php
				switch ($h) {
					case 13:
						echo 'A';
						break;
					case 12:
						echo 'K';
						break;
					case 11:
						echo 'Q';
						break;
					case 10:
						echo 'J';
						break;
					default:
						echo ($h + 1);
						break;
				}
				?>
				</h1>
				<img src="images/suits/<?php echo $i; ?>.png" alt=" ">
			</div>
		</div>
	<?php } } ?>

	<!-- Action Buttons -->
	<div class="buttons">
		<div class="btn b2" id="btn-op"><span>Opponent</span></div>
		<div class="btn b2" id="btn-gy"><span>Graveyard</span></div>
		<div class="btn b1" id="btn-rs"><span>Reset</span></div>
		<div class="btn b3" id="btn-24"><span>24 Cards</span></div>
		<div class="btn b3" id="btn-36"><span>36 Cards</span></div>
		<div class="btn b3" id="btn-52"><span>52 Cards</span></div>
	</div>

	<!-- Scripts -->
	<?php include("/includes/global/scripts.php"); ?>
	<script type="text/javascript">
		<?php include("/js/index.js"); ?>
	</script>

</div>
</body>
</html>
