<?php
$beers = [];
$handle = fopen("beerlist.txt", "r");
if ($handle) {
    while (($line = fgets($handle)) !== false) {
        // Split by hifen
echo $line;
        $parts = explode('-', $line);
        $beers[] = "
{
    \"name\": \"" . trim($parts[1]) . "\",
    \"brewery\": \"" . trim($parts[0]) . "\",
    \"description\": \"" . trim($parts[2]) . "\"
}";
    }
} else {
    // error opening the file.
}
fclose($handle);

$beers = implode(",", $beers);
echo $beers;
