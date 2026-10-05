let attendeeCount = 0;
const maxGoal = 50;

const checkInForm = document.getElementById("checkInForm");

checkInForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const attendeeName = document.getElementById("attendeeName").value;
  const teamSelect = document.getElementById("teamSelect");
  const selectedTeam = teamSelect.value;
  const selectedTeamLabel = teamSelect.options[teamSelect.selectedIndex].text;

  attendeeCount = attendeeCount + 1;
  document.getElementById("attendeeCount").textContent = attendeeCount;

  const teamCountElement = document.getElementById(`${selectedTeam}Count`);
  teamCountElement.textContent = Number(teamCountElement.textContent) + 1;

  const progressPercentage = (attendeeCount / maxGoal) * 100;
  document.getElementById("progressBar").style.width = `${progressPercentage}%`;
  const welcomeMessage = `Welcome, ${attendeeName}! You're checked in with ${selectedTeamLabel}.`;
  document.getElementById("greeting").textContent = welcomeMessage;

  checkInForm.reset();
});
