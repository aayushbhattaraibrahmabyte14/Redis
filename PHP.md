# PHP Basics

PHP is widely used, open source server side scripting languages for making dynamic and interactive webpages. PHP stands for HyperText Preprocessor.
PHP scripts executes in server. PHP files contains HTML, CSS, JavaScript, and PHP code. PHP file extension is .php.
PHP scripts start with "<?php" and ends with "?>"


## Comments
Comments are the text line that will not executes as the part of the program. 
We can use both # and // for single line comments
"#" this style comes from shell scripting language like Bash and Perl.
"//" this styles comes from c, c++ and JS.
 /* comment */ this style is used for multiple lines comment. 
 
## Variable
Variables are the containers to store information.
In PHP variables are declared with $ sign in fromt of variable name.
Variables are must be start with underscore(_) or a letter. 
In PHP variables names are case sensitive for example:- $name and $Name are two different variables.
Example of declaring variable:

$name = "Aayush";
echo "Hello $name!";

//echo is used to show the output text

PHP is the loosley typed language we donot need to specify which data type the variable is.
From PHP 7 type declaraion is also added. This gives for type declaration of the variable and if the type is mismatched the fatal error will occured.


To get the datatype of the varaible in PHP use var_dump() for example:
$name = "Aayush"
var_dump($name)
:output:- string(6)"Aayush"

We can assign same value to multiple variables in the same line. for example:
$x=$y=$z = 22;
echo $x;
echo $y;
echo $z;
-> All 3 variables output wil be 22.

## echo
echo is used to show the output. echo can be used with or without parentheses. echo & echo()
We can output HTML markup with echo. For example: echo "<p>Hello Word</p>";
We can use single quotes for echo but the syntax of echo will be differnt. for example:
-> echo "Hello $variable_name!"; // This is the double quote example
-> echo 'hello' . $variable_name. '!'; // This is the single quote echo example. In single quote variables have to inserted inside . operators.


## print
print is same as echo but print output values after giving output but echo doesnot.

## Data types in PHP
PHP supports following datatypes
### String
$name ="Aayush"; //string data type
strlen() is used to get the length of the string. str_word_count() is used to count the word in string.
Integer -> $age = 20;
Float   -> $points = 50.10;
Boolean -> $isPassed = true;
Array -> $langs = array("PHP","JS","python")
Object ->
class Car {
public $color;
public $name;

public function __construct($color, $name){
	$this->color = $color;
	$this->name = $name;
}

public function message() {
return "My car color is" . $this->color."and name is". $this->name . "!";
}
}
$cars = new Car("black","car");
var_dump($cars);

NULL -> $x = null;
Resource -> Resource is not the actual datatype.

