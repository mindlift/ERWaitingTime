/**
 * Created by wendywang on 2016-03-29.
 */
import {Component,View} from 'angular2/core';

@Component({
    selector:'patient',
    templateUrl:`<html>
<head>
    <title>ERWaitingTime</title>
    <link href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" rel="stylesheet"/>
</head>
<body>
<nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
        <a class="navbar-brand" href="../home">ERWaitingTime</a>
    </div>
</nav>

<div class="container">
    <div class="page-header">
        <div class="page-header" style="margin-top: 100px">
            <h1>Register your account</h1>
        </div>
        <p id="demo"></p>
        <script>
            document.getElementById("demo").innerHTML = Date();
        </script>
        <form method="post" role="form" class="login-form form-horizontal">
            <input name="_csrf" type="hidden"/>
            <div class="form-group">
                <label class="col-sm-4">First Name</label>
                <div class="col-sm-8">
                    <input placeholder="First Name" required="required" type="text" class="form-control"/>
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-4">Last Name</label>
                <div class="col-sm-8">
                    <input placeholder="Last Name" required="required" type="text" class="form-control"/>
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-4">Staff ID</label>
                <div class="col-sm-8">
                    <input placeholder="Staff ID" required="required" type="text" minlength="1" class="form-control"/>
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-4">Password</label>
                <div class="col-sm-8">
                    <input placeholder="5 - 20 Digits Password" required="required" type="password" minlength="5" maxlength="20" class="form-control"/>
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-4">Confirm Password</label>
                <div class="col-sm-8">
                    <input placeholder="Confirm Your Password" required="required" type="password" class="form-control"/>
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-4">Experience in Years</label>
                <div class="col-sm-8">
                    <input placeholder="Your Years of Experience" required="required" type="text" *minlength="1" class="form-control"/>
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-4">Occupation</label>
                <div class="col-sm-8">
                    <form action="">
                        <input type="checkbox" name="occupation" value="Doctor">Doctor
                        <br>
                        <input type="checkbox" name="occupation" value="Nurse">Nurse
                    </form>
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-4 col-sm-8">
                    <button type="submit" class="login btn btn-primary">Register</button>
                </div>
            </div>
        </form>
    </div>
</div>`
})


export class RegisterComponent{
}