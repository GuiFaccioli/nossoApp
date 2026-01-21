function toggleBiceps() {
  document.querySelectorAll(".biceps").forEach(btn => {
    btn.hidden = !btn.hidden;
  });
}
function togglePeito() {
  document.querySelectorAll(".peito").forEach(btn => {
    btn.hidden = !btn.hidden;
  });
}
function toggleOmbros() {
  document.querySelectorAll(".ombros").forEach(btn => {
    btn.hidden = !btn.hidden;
  });
}


function roscaDireta() {

    document.getElementById("roscaDireta").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

function roscaAlternada() {

    document.getElementById("roscaAlternada").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

function roscaMartelo() {

    document.getElementById("roscaMartelo").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

function roscaConcentrada() {

    document.getElementById("roscaConcentrada").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


function rosca21() {

    document.getElementById("rosca21").scrollIntoView({
        behavior:"smooth",
        block:"start"
    });
}

