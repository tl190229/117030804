<?php
$hide = $_REQUEST["hide"];
$conn = mysqli_connect("127.0.0.1", "root", "", "h52005", 3306);
mysqli_query($conn, "SET NAMES utf8");
if ($hide == 0) { //渲染页面
    $sql = "SELECT id,name,writer,price,count,jianjie FROM book";
    $result = mysqli_query($conn, $sql);
    $arr = [];
    while (($row = mysqli_fetch_assoc($result))) {
        array_push($arr, $row);
    }
    echo JSON_encode($arr);
} else if ($hide == 1) { //新增页面
    $name = $_POST["name"];
    $writer = $_POST["writer"];
    $count = $_POST["count"];
    $price = $_POST["price"];
    $jianjie = $_POST["jianjie"];
    $content = $_POST["content"];
    $sql = "INSERT INTO book values(0,'$name','$writer','$count','$price','$jianjie','$content')";
    mysqli_query($conn, $sql);
    echo ("<script>sessionStorage.zhuangtai='新增成功';location='../html/状态页.html';</script>");
} else if ($hide == 2) { //删除
    $id = $_GET["id"];
    $sql = "DELETE FROM `book` WHERE id='$id'";
    mysqli_query($conn, $sql);
} else if ($hide == 3) { //查看
    $id = $_GET["id"];
    $sql = "SELECT name,content FROM book  WHERE id='$id'";
    $result = mysqli_query($conn, $sql);
    $arr = [];
    while (($row = mysqli_fetch_assoc($result))) {
        array_push($arr, $row);
    }
    echo JSON_encode($arr);
} else if ($hide == 4) { //进入修改页面渲染页面
    $id = $_GET["id"];
    $sql = "SELECT * FROM book  WHERE id='$id'";
    $result = mysqli_query($conn, $sql);
    $arr = [];
    while (($row = mysqli_fetch_assoc($result))) {
        array_push($arr, $row);
    }
    echo JSON_encode($arr);
} else if ($hide == 5) { //修改
    $id = $_POST["id"];
    $name = $_POST["name"];
    $writer = $_POST["writer"];
    $price = $_POST["price"];
    $count = $_POST["count"];
    $jianjie = $_POST["jianjie"];
    $content = $_POST["content"];
    $sql = "UPDATE book SET name='$name',writer='$writer',count='$count',price='$price',jianjie='$jianjie',content='$content' WHERE id='$id'";
    $ms = mysqli_query($conn, $sql);
    echo ("<script>sessionStorage.zhuangtai='修改成功';location='../html/状态页.html';</script>");
} else if ($hide == 6) { //登录
    $name = $_POST["name"];
    $pwd = $_POST["pwd"];
    $sql = "SELECT name,pwd,vip FROM teacher";
    $result = mysqli_query($conn, $sql);
    while (($row = mysqli_fetch_assoc($result))) {
        if ($name == $row["name"] && $pwd == $row["pwd"]) { //账号密码正确
            $vip=$row["vip"];
            echo ("<script>sessionStorage.vip="."'$vip'".";sessionStorage.zhuangtai='登录成功';sessionStorage.name1=" . "'$name'" . ";location='../html/状态页.html';</script>");
        }else{
            echo("<script>sessionStorage.zhuangtai='登录失败';location='../html/状态页.html';</script>");
        }
    }
} else if ($hide == 7) { //注册
    $name = $_POST["name"];
    $pwd = $_POST["pwd"];
    $email = $_POST["email"];
    $vip = $_POST["vip"];
    $sql = "SELECT name FROM teacher";
    $result = mysqli_query($conn, $sql);
    while (($row = mysqli_fetch_assoc($result))) {
        if ($row["name"] == $name) { //用户名已存在
            //拒绝
            echo("<script>sessionStorage.zhuangtai='注册失败';location='../html/状态页.html';</script>");
            return false;
        }
    }
    //用户名不存在，注册
    $sql = "INSERT INTO teacher value(0,'$name','$pwd','$email','$vip')";
    $result = mysqli_query($conn, $sql);
    echo ("<script>sessionStorage.zhuangtai='注册成功';
    location='../html/状态页.html';</script>");
}
