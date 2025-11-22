// ------- 主题 -------
document.getElementById("lightBtn").onclick = () => document.body.classList.remove("dark");
document.getElementById("darkBtn").onclick  = () => document.body.classList.add("dark");

document.getElementById("logout").onclick = () => location.href="../backend/logout.php";

// ------- 文件列表 -------
async function loadFileList(){
  let r = await fetch("../backend/list.php");
  let arr = await r.json();
  fileList.innerHTML = "";
  arr.forEach(f=>{
    let o = document.createElement("option");
    o.value = f;
    o.textContent = f;
    fileList.appendChild(o);
  });

  loadFile(arr[0]);
}

async function loadFile(name){
  let r = await fetch("../backend/load.php?f="+name);
  editor.value = await r.text();
  render();
}

fileList.onchange = () => loadFile(fileList.value);

// ------- Markdown 渲染 -------
function render(){
  preview.innerHTML = markdown(editor.value);
}

editor.oninput = render;

// ------- 新建文件 -------
newFile.onclick = async ()=>{
  let name = prompt("请输入文件名，例如 note2.md");
  if(!name) return;

  let r = await fetch("../backend/create.php",{
    method:"POST",
    headers:{'Content-Type':'application/x-www-form-urlencoded'},
    body:"name="+name
  });

  status.innerText = await r.text();
  loadFileList();
};

// ------- 保存 -------
saveBtn.onclick = save;

async function save(){
  let r = await fetch("../backend/save.php",{
    method:"POST",
    headers:{'Content-Type':'application/x-www-form-urlencoded'},
    body:`f=${fileList.value}&text=${encodeURIComponent(editor.value)}`
  });

  status.innerText = await r.text();
}

// 自动保存
setInterval(save, 5000);

loadFileList();