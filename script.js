$( document ).ready(function() {
/* prints only section choosen */

function printDiv(divName) {
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;
  
    document.body.innerHTML = printContents;
  
    window.print();
  
    document.body.innerHTML = originalContents;
  }
  
  $("input[data-type='currency']").on({
    keyup: function () {
      formatCurrency($(this));
    },
    blur: function () {
      formatCurrency($(this), "blur");
    }
  });
  
  function formatNumber(n) {
    // format number 1000000 to 1,234,567
    return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  function formatCurrency(input, blur) {
    // appends $ to value, validates decimal side
    // and puts cursor back in right position.
  
    // get input value
    var input_val = input.val();
  
    // don't validate empty input
    if (input_val === "") {
      return;
    }
  
    // original length
    var original_len = input_val.length;
  
    // initial caret position
    var caret_pos = input.prop("selectionStart");
  
    // check for decimal
    if (input_val.indexOf(".") >= 0) {
      // get position of first decimal
      // this prevents multiple decimals from
      // being entered
      var decimal_pos = input_val.indexOf(".");
  
      // split number by decimal point
      var left_side = input_val.substring(0, decimal_pos);
      var right_side = input_val.substring(decimal_pos);
  
      // add commas to left side of number
      left_side = formatNumber(left_side);
  
      // validate right side
      right_side = formatNumber(right_side);
  
      // On blur make sure 2 numbers after decimal
      if (blur === "blur") {
        right_side += "00";
      }
  
      // Limit decimal to only 2 digits
      right_side = right_side.substring(0, 2);
  
      // join number by .
      input_val = "₺" + left_side + "." + right_side;
    } else {
      // no decimal entered
      // add commas to number
      // remove all non-digits
      input_val = formatNumber(input_val);
      input_val = "₺" + input_val;
  
      // final formatting
      if (blur === "blur") {
        input_val += ".00";
      }
    }
  
    // send updated string to input
    input.val(input_val);
  
    // put caret back in the right position
    var updated_len = input_val.length;
    caret_pos = updated_len - original_len + caret_pos;
    input[0].setSelectionRange(caret_pos, caret_pos);
  }
  
  (function () {
    var f = document.getElementById("fixtures"),
      limit = 5; //Define max lines limit
  
    function limitLines() {
      var l = f.value.replace(/\r\n/g, "\n").replace(/\r/g, "").split(/\n/g); //split lines
      if (l.length > limit) {
        f.value = l.slice(0, limit).join("\n");
      }
    }
  
    function paste() {
      //onpaste needs timeout
      setTimeout(limitLines, 1);
    }
  
    limitLines(); //Like onload
  
    f.onkeyup = limitLines;
    f.onpaste = paste;
  })();
  
  (function () {
    var g = document.getElementById("re-handover"),
      limit = 2; //Define max lines limit
  
    function limitLines() {
      var l = g.value.replace(/\r\n/g, "\n").replace(/\r/g, "").split(/\n/g); //split lines
      if (l.length > limit) {
        g.value = l.slice(0, limit).join("\n");
      }
    }
  
    function paste() {
      //onpaste needs timeout
      setTimeout(limitLines, 1);
    }
  
    limitLines(); //Like onload
  
    g.onkeyup = limitLines;
    g.onpaste = paste;
  })();
  
  (function () {
    var h = document.getElementById("re-paint"),
      limit = 2; //Define max lines limit
  
    function limitLines() {
      var l = h.value.replace(/\r\n/g, "\n").replace(/\r/g, "").split(/\n/g); //split lines
      if (l.length > limit) {
        h.value = l.slice(0, limit).join("\n");
      }
    }
  
    function paste() {
      //onpaste needs timeout
      setTimeout(limitLines, 1);
    }
  
    limitLines(); //Like onload
  
    h.onkeyup = limitLines;
    h.onpaste = paste;
  })();
  
  (function () {
    var a = document.getElementById("add-article-1"),
      limit = 2; //Define max lines limit
  
    function limitLines() {
      var l = a.value.replace(/\r\n/g, "\n").replace(/\r/g, "").split(/\n/g); //split lines
      if (l.length > limit) {
        a.value = l.slice(0, limit).join("\n");
      }
    }
  
    function paste() {
      //onpaste needs timeout
      setTimeout(limitLines, 1);
    }
  
    limitLines(); //Like onload
  
    a.onkeyup = limitLines;
    a.onpaste = paste;
  })();
  
  (function () {
    var b = document.getElementById("add-article-2"),
      limit = 2; //Define max lines limit
  
    function limitLines() {
      var l = b.value.replace(/\r\n/g, "\n").replace(/\r/g, "").split(/\n/g); //split lines
      if (l.length > limit) {
        b.value = l.slice(0, limit).join("\n");
      }
    }
  
    function paste() {
      //onpaste needs timeout
      setTimeout(limitLines, 1);
    }
  
    limitLines(); //Like onload
  
    b.onkeyup = limitLines;
    b.onpaste = paste;
  })();
  
  (function () {
    var c = document.getElementById("add-article-3"),
      limit = 2; //Define max lines limit
  
    function limitLines() {
      var l = c.value.replace(/\r\n/g, "\n").replace(/\r/g, "").split(/\n/g); //split lines
      if (l.length > limit) {
        c.value = l.slice(0, limit).join("\n");
      }
    }
  
    function paste() {
      //onpaste needs timeout
      setTimeout(limitLines, 1);
    }
  
    limitLines(); //Like onload
  
    c.onkeyup = limitLines;
    c.onpaste = paste;
  })();
  
  var landlordInput = document.getElementById("leaser-name");
  var landlord = document.getElementsByClassName("landlord");
  landlordInput.addEventListener("input", function () {
    for (var i = 0; i < landlord.length; i++) {
      landlord[i].innerHTML = landlordInput.value;
    }
  });
  
  var renterInput = document.getElementById("tenant-name");
  var renter = document.getElementsByClassName("renter");
  renterInput.addEventListener("input", function () {
    for (var i = 0; i < renter.length; i++) {
      renter[i].innerHTML = renterInput.value;
    }
  });
  
  var guarantorInput = document.getElementById("guarant-name");
  var guarantor = document.getElementsByClassName("guarantor");
  guarantorInput.addEventListener("input", function () {
    for (var i = 0; i < guarantor.length; i++) {
      guarantor[i].innerHTML = guarantorInput.value;
    }
  });
  
  var datestartInput = document.getElementById("date-start");
  var datestart = document.getElementsByClassName("datestart");
  datestartInput.addEventListener("input", function () {
    for (var i = 0; i < datestart.length; i++) {
      datestart[i].innerHTML = datestartInput.value;
    }
  });
  
  var dateendInput = document.getElementById("date-end");
  var dateend = document.getElementsByClassName("dateend");
  dateendInput.addEventListener("input", function () {
    for (var i = 0; i < dateend.length; i++) {
      dateend[i].innerHTML = dateendInput.value;
    }
  });
  
  var rentInput = document.getElementById("rent-per-term");
  var rentperterm = document.getElementsByClassName("rentperterm");
  rentInput.addEventListener("input", function () {
    for (var i = 0; i < rentperterm.length; i++) {
      rentperterm[i].innerHTML = rentInput.value;
    }
  });
  
  var depositInput = document.getElementById("value-security");
  var deposit = document.getElementsByClassName("deposit");
  depositInput.addEventListener("input", function () {
    for (var i = 0; i < deposit.length; i++) {
      deposit[i].innerHTML = depositInput.value;
    }
  });
  
  var payviaInput = document.getElementById("payment-via");
  var payvia = document.getElementsByClassName("payvia");
  payviaInput.addEventListener("input", function () {
    for (var i = 0; i < payvia.length; i++) {
      payvia[i].innerHTML = payviaInput.value;
    }
  });
  
  var paytimeInput = document.getElementById("payment-time");
  var paytime = document.getElementsByClassName("paytime");
  paytimeInput.addEventListener("input", function () {
    for (var i = 0; i < paytime.length; i++) {
      paytime[i].innerHTML = paytimeInput.value;
    }
  })
})