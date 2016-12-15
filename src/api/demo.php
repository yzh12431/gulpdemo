<?php
header('content-type:text/html;charset="utf-8"');
error_reporting(0);

$response = array(
    'err'=>'0',
    'errmsg'=>'',
);

echo json_encode($response);