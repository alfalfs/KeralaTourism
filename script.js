//document.getElementById("upassword").addEventListener("onchange", checkPasswordStrength);

//name validation
function validateName(input) {
    var regExp = /^[a-zA-Z ]*$/;
    if (regExp.test(input)) {
        return true;
    } else {
        return false;
    }
}

//email validation
function validateEmailId(input) {
    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailFormat.test(input)) {
        return true;
    } else {
        return false;
    }
}
//password strength check 

function checkPasswordStrength() {
    var number = /([0-9])/;
    var alphabets = /([a-zA-Z])/;
    var special_characters = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;
    if ($('#upassword').val().length < 8) {
        $('#passwstatus').removeClass();
        $('#Weak-info').addClass('text-danger font-weight-700');
        $('#Weak-info').html("Weak (should be atleast 6 characters.)");
    } else {
        if ($('#upassword').val().match(number) && $('#upassword').val().match(alphabets) && $('#upassword').val().match(special_characters)) {
            $('#passwstatus').removeClass();
            $('#Strong-info').addClass('text-success font-weight-700');
            $('#Strong-info').html("Strong");
        } else {
            $('#passwstatus').removeClass();
            $('#Average-info').addClass('text-info font-weight-700');
            $('#Average-info').html("Medium (should include alphabets, numbers and special characters.)");
        }
    }
}
/*
function checkPasswordStrength() {
    var number = /([0-9])/;
    var alphabets = /([a-zA-Z])/;
    var special_characters = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;
    if ($('#upassword').val().length < 8) {

    } else {
        if ($('#upassword').val().match(number) && $('#password').val().match(alphabets) && $('#password').val().match(special_characters)) {
            $('#passwstatus').removeClass();
            $('#Strong-info').addClass('text-success font-weight-700');
            $('#Strong-info').html("Strong");
        } else {
            $('#passwstatus').removeClass();
            $('#Average-info').addClass('text-info font-weight-700');
            $('#Average-info').html("Medium (should include alphabets, numbers and special characters.)");
        }
    }
}
*/
//validatelogin
function validateloginForm() {
    //swal("Alfred test!", "Email required!", "warning");
    //var email = document.forms["login-form"]["uemail"].value; class="form-group"
    //var passw = document.forms["login-form"]["upassword"].value;
    if (email == "") {
        //swal('');
        swal("Email fleid should not be Empty!", "Email required!", "warning");
        document.getElementById("email").focus();
        return false;
    } else if (!validateEmailId(email)) {
        swal("Email fleid should be Valid!", "Email Invalid!", "warning");
        document.getElementById("email").focus();
        return false;
    } else if (passw == "") {
        swal("Required password fleid should be filled!", "Required password!", "warning");
        swal('Required password');
        document.getElementById("password").focus();
        return false;
        /*}else if (!validatePassword(password)){
            swal('At least 8 chars , one digit,one lower alpha char and one upper alpha char, one char within a set of special chars (@%^ etc.)');
            document.getElementById("password").focus();
            return false;   */
    } else {
        return true;
    }
}


//login password strength meter
const input = document.getElementById('upassword')
const indicator = document.getElementById('indicator')
const text = document.getElementById('text')

function passCheck() {
    const password = input.value
    const currentSrength = {
        lengthScores: 0,
        complexityScores: 0,
        caseScores: 0
    }
    if (password.length < 4) {
        currentSrength.lengthScores = 0;
    } else if (password.length > 12) {
        currentSrength.lengthScores = 1;
    } else {
        currentSrength.lengthScores = input.value.length / 20;
    }

    if (password.match(/\d/g)) {
        currentSrength.complexityScores += 0.3;
    }
    if (password.match(/[a-zA-Z]/g)) {
        currentSrength.complexityScores += 0.35;
    }
    if (password.match(/[\W_]/g)) {
        currentSrength.complexityScores += 0.4;
    }

    if (password.match(/[a-z]/g)) {
        currentSrength.caseScores += 0.5;
    }
    if (password.match(/[A-Z]/g)) {
        currentSrength.caseScores += 0.5;
    }

    const scores = Math.round(
        currentSrength.lengthScores +
        currentSrength.complexityScores +
        currentSrength.caseScores
    )
    setStrength(scores);
}

function setStrength(level) {
    switch (level) {
        case 0:
            level = 'week';
            break;
        case 1:
            level = 'fair';
            break;
        case 2:
            level = 'good';
            break;
        case 3:
            level = 'strong';
            break;
        default:
            level = 'week';
    }
    text.innerText = level;
    indicator.className = `pass__label pass__label--${level}`
}