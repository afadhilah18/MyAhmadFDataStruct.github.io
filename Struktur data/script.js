var rowNum = 1;

function addData() {
    var nim = document.getElementById('nim').value;
    var nama = document.getElementById('nama').value;
    var kelas = document.getElementById('kelas').value;
    var jurusan = document.getElementById('jurusan').value;
    var umur = document.getElementById('umur').value;
    var gender = document.getElementById('gender').value;

    if (!nim || !nama || !kelas || !jurusan || !umur|| !gender) {
      alert('Silakan isi semua kolom');
      return;
    }

    var table = document.getElementById('data-table').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);

    cell1.innerHTML = rowNum;
    cell2.innerHTML = nim;
    cell3.innerHTML = nama;
    cell4.innerHTML = kelas;
    cell5.innerHTML = jurusan;
    cell6.innerHTML = umur;
    cell7.innerHTML = gender;

    document.getElementById('nim').value = '';
    document.getElementById('nama').value = '';
    document.getElementById('kelas').value = '';
    document.getElementById('jurusan').value = '';
    document.getElementById('umur').value = '-';
    document.getElementById('gender').value = '-';

    rowNum++;

    }