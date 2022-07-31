<!DOCTYPE html>
<html>
<head>
    <script type="text/javascript">
        function ValidateEmail(inputText)
        {
            var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if(inputText.value.match(mailformat))
            {
                alert("Valid email address!");
                return true;
            }
            else
            {
                alert("Invalid email address!");
                return false;
            }
        }
    </script>
</head>
<body>

    
    <form name="form1" action="#">
        <input type='text' name='text1'/>

        <input type="submit" name="submit" value="Submit" onclick="ValidateEmail(document.form1.text1)"/>
    </form>

    <script src="email-validation.js"></script>
</body>
</html>