import React from 'react'

function Footer () {
	return(
		<div className="footer">
			<h1>Guided Meditation</h1>
			<p><i>strengthen the mind</i></p>
			<br />
			<br />
			<hr />
			<h2>Contact</h2>
			<form action="mailto: marissa@mindguidedmeditation.com" method="post" enctype="text/plain">
			<a href="https://www.mindguidedmeditation.com/"/>
			</form>
			<br />
			<hr />
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
			<div class="icon-bar">
				 <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
				 <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
				 <a href="#" class="google"><i class="fa fa-google"></i></a>
				 <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
				 <a href="#" class="youtube"><i class="fa fa-youtube"></i></a>
				 </div>
	   <h1 className="bottom"></h1>
		</div>
			)
}

export default Footer
