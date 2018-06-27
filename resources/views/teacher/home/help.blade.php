@extends('partial.layout')
@section('content')
    <style>
        label{
            display: block;
        }
    </style>
    @include('teacher.partial.header')
    @include('teacher.partial.sidebar')
    <div class="content-wrapper">
        <section class="content-header">
            <h1>Help</h1>
        </section>
        <section class="content">
			<div class="container">	
				<ul class="nav nav-tabs">
					<li class="active"><a href="#1" data-toggle="tab">User Guide</a></li>
					<li><a href="#2" data-toggle="tab">How-To</a></li>
					<li><a href="#3" data-toggle="tab">FAQ</a></li>
					<li><a href="#4" data-toggle="tab">More Help?</a></li>
				</ul>
				<div class="tab-content">
					<div class="tab-pane active" id="1">
						<div class="bottom-edge">
							<h2>1. What is DCS?</h2>
							<p>Digital Competency Score (DCS) is a gamified instrument to assess digital competency levels of students in three(3) domains, namely <strong>Technology</strong>, 
								<strong>Cognitive</strong> and <strong>Digital Citizenship</strong>. 
							</p>
							<p>Students in selected primary and secondary schools from all over the country sit for DCS every year. 
								The findings are summarised and presented to the Ministry of Education (MOE).</p>
						</div>
						<div class="bottom-edge">
							<h2>2. Roles</h2>
							<p>Everyone has a role to play to ensure the smooth implementation of DCS.</p>
							<ol>
								<li><strong>Admin</strong>
									<ul>
										<li>Admins are stakeholders of DCS, i.e. users from BTP, BTPN, PKG, JPN, MDEC and the developer.
										<li>Functions of Admins include:
											<ol type="i">
												<li>Creating accounts for selected schools and their school managers by generating a set of temporary username and password for each school manager.</li>
												<li>Monitoring the progress of schools and students during the assessment period.</li>
											</ol>
										</li>
									</ul>
								</li>
								<li><strong>School Manager</strong>
									<ul>
										<li>The School Manager is the person who is primarily responsible to manage the implementation of DCS in his/her school. 
										The School Manager also acts as the point of contact between the school and Admins.
											<li>Functions of a School Manager include:
												<ol type="i">
													<li>Setting up the school account by logging in with the temporary username and password supplied by BTP/BTPN/PKG/JPN.</li>
													<li>Creating accounts for teachers who will be in charge of selected classes/students by generating a set of temporary username and password for each teacher.</li>
													<li>Monitoring the progress of classes and students to ensure that all students complete the assessment as scheduled.</li>
												</ol>
											</li>
										</li>
									</ul>
								</li>
								<li><strong>Teacher</strong>
									<ul>
										<li>A Teacher is responsible to ensure that all students in his/her selected classes complete the assessment as scheduled.
											<li>Functions of a Teacher include:
												<ol type="i">
													<li>Setting up his/her account by logging in with the temporary username and password supplied by the School Manager.</li>
													<li>Creating the classes involved in DCS.</li>
													<li>Creating accounts for all students involved by entering their fullname and MyKad/MyKid numbers.</li>
													<li>Monitoring the progress of classes and students to ensure that all students complete the assessment as scheduled.</li>
												</ol>
											</li>
										</li>
									</ul>
								</li>
								<li><strong>Student</strong>
									<ul>
										<li>Each student should log in and complete the assessment as scheduled.
											<li>Functions of a Student include:
												<ol type="i">
													<li>Logging in with his/her MyKad/MyKid number as the username and using the last four(4) digit of his/her MyKad/MyKid number as the password.</li>
													<li>Completing all stages and answering all questions given in the game.</li>
													<li>Saving and/or printing the certificate of completion and claiming the digital badge (if an average score of 3 or more is attained).</li>
												</ol>
											</li>
										</li>
									</ul>
								</li>
							</ol>
						</div>
					</div>
					<div class="tab-pane" id="2">
						<div class="bottom-edge">
							<h2 class="text-primary">Teacher</h2>
						</div>
						<div class="bottom-edge">
							<h3>Logging In</h3>
							<div class="row">
								<div class="col-md-8">
									<div class="embed-responsive embed-responsive-16by9">
										<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/m4l_tjtb3IQ" allowfullscreen></iframe>
									</div>
								</div>
								<div class="col-md-4">
									<ol>
										<li>At the home page, key in the temporary <strong>Username</strong> and <strong>Password</strong> that you have received from the School Manager.</li>
										<li>Click <strong>Login</strong>.</li>
										<li>Key in your MyKad number.</li>
										<li>Click <strong>Save</strong>.</li>
										<li>Your new <strong>Username</strong> is your MyKad number and your new <strong>Password</strong> is the last four(4) digits of your myKad number.</li>
										<li>Click <strong>Ok</strong>.</li>
										<li>Fill in your name, email address and contact number.</li>
										<li>Click <strong>Save</strong>.</li>
									</ol>
								</div>
							</div>
						</div>
						<div class="bottom-edge">
							<h3>Creating Students</h3>
							<div class="row">
								<div class="col-md-8">
									<div class="embed-responsive embed-responsive-16by9">
										<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/LeRMZC8YKI8" allowfullscreen></iframe>
									</div>
								</div>
								<div class="col-md-4">
									<ol>
										<li>Click <strong>Student Management</strong>.</li>
										<li>Click <strong>Create New Class</strong>.</li>
										<li>Fill in the <strong>Class Name</strong> and <strong>Level</strong>.</li>
										<li>Click <strong>Create New Class</strong>. The name of the classes that you have just created appears.</li>
										<li>To add students to the class, click <strong>Students</strong>.</li>
										<li>To simplify the keying in of the list of students involved, you can prepare the student list using Microsoft Excel 
										and import the file into the system. Click <strong>Excel Sample</strong> to download the Excel template.</li>
										<li>Open the Excel file and fill in the <strong>student names</strong>and <strong>MyKad/MyKid numbers</strong>. Don't forget to <strong>save</strong> the file once you are done.</li>
										<li>Click <strong>Import Students Excel</strong> and select the Excel fail that you have prepared. 
										The list of students will appear.</li>
										<li>To register the students one at a time, click <strong>Create New Student</strong>.</li>
										<li>Click <strong>Create</strong>. The name of the student that you have just created will appear.</li>
										<li>When it is time to conduct the assessment, instruct the students to use their MyKad/MyKid number as their username, 
										and the last four(4) digit of their MyKad/MyKid number as their password.</li>
									</ol>
								</div>
							</div>
						</div>
						<div class="bottom-edge">
							<h3>Monitoring Progress</h3>
							<div class="row">
								<div class="col-md-8">
									<div class="embed-responsive embed-responsive-16by9">
										<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/skqbgTdkeWU" allowfullscreen></iframe>
									</div>
								</div>
								<div class="col-md-4">
									<ol>
										<li>Click <strong>Progress</strong> to keep track of the progress of the assessment.</li>
										<li>You can view the progress by <strong>Class</strong> and <strong>Student</strong>.</li>
									</ol>
								</div>
							</div>
						</div>
						<div class="bottom-edge">
							<h2 class="text-primary">Student</h2>
						</div>
						<div class="bottom-edge">
							<h3>Logging In</h3>
							<div class="row">
								<div class="col-md-8">
									<div class="embed-responsive embed-responsive-16by9">
										<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/Gpz3QnfHkG8" allowfullscreen></iframe>
									</div>
								</div>
								<div class="col-md-4">
									<ol>
										<li>At the home page, key in the your MyKad/MyKid number as the <strong>Username</strong> and the last four(4) digits of your myKad/MyKid number as <strong>Password</strong>.</li>
										<li>Click <strong>Login</strong>.</li>
										
									</ol>
								</div>
							</div>
						</div>
						<div class="bottom-edge">
							<h3>Start Playing and Answering</h3>
							<div class="row">
								<div class="col-md-8">
									<div class="embed-responsive embed-responsive-16by9">
										<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/77s4uuABmc8" allowfullscreen></iframe>
									</div>
								</div>
								<div class="col-md-4">
									<ol>
										<li>Click <strong>Play</strong>.</li>
										<li>Follow the instructions on every screen. Make sure that you answer and complete all stages.</li>
									</ol>
								</div>
							</div>
						</div>
					</div>
					<div class="tab-pane" id="3">
						<div class="bottom-edge">
							<h4 class="text-primary">1. A Student has forgotten his/her username and password. How can I help?</h4>
							<p>The username should be his/her MyKad/MyKid number and the password should be the last four (4) digit of his/her MyKad/MyKid number.</p>
						</div>
						<div class="bottom-edge">
							<h4 class="text-primary">2. The MyKad/MyKid number of a Student has been wrongly entered. Now he/she can't login. How can I fix this?</h4>
							<ol type="a">
								<li>In the side menu, click <strong>Student Management</strong>.</li>
								<li>Find the class to which the student belong. Click the <strong>Student</strong> button on that row.</li>
								<li>Find the student's name in the student list. Click <strong>Edit</strong>.</li>
								<li>Edit the student's MyKad/MyKid number and click <strong>Save</strong>.</li>
								<li>The username and password for the student will be updated.</li>
							</ol>
						</div>
						<div class="bottom-edge">
							<h4 class="text-primary">3. During the assessment, many students are logged out or have their browsers stop responding due to poor Internet connection. What should they do?</h4>
							<ol type="a">
								<li>Ask the students to refresh their browsers, log in again and click the <strong>Play</strong> button.</li>
								<li>They should be able to resume from the last screen that they were viewing.</li>
							</ol>
						</div>
					</div>
					<div class="tab-pane" id="4">
						<div class="bottom-edge">
							<h2>DCS Helpline</h2>
							<p>You've browsed the User Guide, How-To and FAQ sections and still can't find what you need?</p>
							<p>No worries, we'll be happy to help.</p>
							
							<div class="well">
								<h3><i class="fa fa-mobile"></i> 011 2611 5026</h3>
								<p>Whatsapp | SMS | Voice call</p>
								<p>The DCS Helpline is available daily Monday to Friday, 9 am to 5 pm.</p>
								<p>Issues raised after the support hours will be attended to on the next working day. You can also reach us via email:</p>
								<h4><i class="fa fa-envelope"></i> <a href="mailto:tapirhero2018@gmail.com">tapirhero2018@gmail.com</a></h4>
							</div>	
							<p>You can also contact your respective PKG or BTPN.</p>
						</div>
					</div>
				</div>
			</div>
		</section>	
	</div>
    @include('teacher.partial.footer')
    @include('partial.scripts')
    <script>
        $(document).ready(function () {

        });
    </script>
@endsection