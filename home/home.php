<?php $server = 'localhost';
$user = 'kadyszew_blogdb';
$pass = '9P]3PR(S7O';
$db = 'kadyszew_blogdb';
$con = mysql_connect($server, $user, $pass);
$db_selected = mysql_select_db($db);
$result = mysql_query("SELECT p.post_title, p.post_content, u.user_login FROM blog_posts p, blog_users u where p.post_status = 'publish' and u.ID = p.post_author and p.post_type = 'post';");
$rows = array();
while($row = mysql_fetch_array($result))
{
   $rows[] = $row;
}
?>
<script>
var posts_json = <?php print(json_encode($rows)); ?>;
</script>

<?php
echo "<!DOCTYPE html>\n";
echo "<html lang=\"en\">\n";
echo "	<head>\n";
echo "		<script type=\"text/javascript\" src=\"sprint.min.js\"></script>\n";
echo "		<script type=\"text/javascript\" src=\"https://www.google.com/jsapi\"></script>\n";
echo "		<link rel=\"stylesheet\" type=\"text/css\" href=\"home.css\">\n";
echo "		 <link rel=\"stylesheet\" type=\"text/css\" href=\"http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext\">\n";
echo "		<meta charset=\"utf-8\">\n";
echo "		<title>Kadyszewski</title>\n";
echo "	</head>\n";
echo "	<body>\n";
echo "	<div class=\"loader1\" title=\"1\" id=\"loading-image\">\n";
echo "  <svg version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n";
echo "     width=\"40px\" height=\"40px\" viewBox=\"0 0 50 50\" style=\"enable-background:new 0 0 50 50;\" xml:space=\"preserve\">\n";
echo "  <path fill=\"#000\" d=\"M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z\">\n";
echo "    <animateTransform attributeType=\"xml\"\n";
echo "      attributeName=\"transform\"\n";
echo "      type=\"rotate\"\n";
echo "      from=\"0 25 25\"\n";
echo "      to=\"360 25 25\"\n";
echo "      dur=\"0.6s\"\n";
echo "      repeatCount=\"indefinite\"/>\n";
echo "    </path>\n";
echo "  </svg>\n";
echo "</div>\n";
echo "		<script type=\"text/javascript\" src=\"newHome.js\"></script>\n";
echo "	</body>\n";
echo "</html>\n";
echo "\n";
?>
