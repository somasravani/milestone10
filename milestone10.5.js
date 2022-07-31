<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>
<h1>meta programming and using the proxy concept</h1>
<script>
let handler = {
  get(target, name) {
    return name in target ? target[name] : "sravani";
  }
}

let p = new Proxy({}, handler)
p.a = 1
document.write(p.a+"<br>"+ p.b);
</script>
</body>
</html>
