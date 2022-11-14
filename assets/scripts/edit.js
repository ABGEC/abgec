var occop = 0;
var imageUrl = "";
var field = document.getElementById("newinput");
var btn_delete = document.getElementById("delete_btn");
var occupation_group =
  '<div id="newinput">' +
  '<div class="horizontal-group">' +
  '<div class="form-group left">' +
  '<label class="label-title">OCCUPATION</label>' +
  '<div class="input-group">' +
  '<select id="occupation" class="form-input" name="occupation">' +
  '<option value="Male">Service</option>' +
  '<option value="Female">Self employed</option>' +
  "</select>" +
  "</div>" +
  "</div>" +
  '<div class="form-group right">' +
  '<label for="organization" class="label-title">ORGANIZATION</label>' +
  '<input type="text" id="organization" class="form-input" placeholder="Ex. Coal India" />' +
  "</div>" +
  "</div>" +
  '<div class="horizontal-group">' +
  '<div class="form-group left">' +
  '<label for="designation" class="label-title">DESIGNATION</label>' +
  '<input type="text" id="designation" class="form-input" placeholder="Ex. Manager" />' +
  "</div>" +
  '<div class="form-group right">' +
  '<label for="year" class="label-title">YEAR</label>' +
  '<input type="text" id="year" class="form-input" placeholder="Ex. 1990-1995-" />' +
  "</div>" +
  "</div>" +
  '<div class="form-group">' +
  '<label for="experience" class="label-title">EXPERIENCE</label>' +
  '<textarea class="form-input" rows="4" cols="50" style="height:auto"></textarea>' +
  "</div>" +
  "</div>";

function addExp() {
  field.insertAdjacentHTML("beforeend", occupation_group);
  occop += 1;
  if (occop > 0) {
    btn_delete.style.display = "block";
  }
}
function removeEXP() {
  occop -= 1;
  if (occop <= 0) {
    btn_delete.style.display = "none";
  }
}

async function uploadImage() {
  const profileImage = document.getElementById('profileImage');
  const formData = new FormData();
  formData.append("profileImage", profileImage.files[0],"imageName.png");
  try {
    const response = await axios.post(
      '/uploadImage',
      formData
    );
    console.log("response: "+response);
    imageUrl = response.data;
  } catch (error) {
    console.error("errorAjax:" + error);
  }
  console.log("imageurl:" + imageUrl);
  return imageUrl;
}
