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

  const attendeeItem = document.createElement("li");
  const attendeeNameElement = document.createElement("span");
  attendeeNameElement.classList.add("attendee-name");
  attendeeNameElement.textContent = attendeeName;
  const attendeeTeamElement = document.createElement("span");
  attendeeTeamElement.classList.add("attendee-team");
  attendeeTeamElement.textContent = selectedTeamLabel;
  attendeeItem.appendChild(attendeeNameElement);
  attendeeItem.appendChild(attendeeTeamElement);
  document.getElementById("attendeeList").appendChild(attendeeItem);

  const progressPercentage = (attendeeCount / maxGoal) * 100;
  document.getElementById("progressBar").style.width = `${progressPercentage}%`;
  let welcomeMessage = `Welcome, ${attendeeName}! You're checked in with ${selectedTeamLabel}.`;

  if (attendeeCount === maxGoal) {
    const waterCount = Number(
      document.getElementById("waterCount").textContent,
    );
    const zeroCount = Number(document.getElementById("zeroCount").textContent);
    const powerCount = Number(
      document.getElementById("powerCount").textContent,
    );
    const highestTeamCount = Math.max(waterCount, zeroCount, powerCount);
    const winningTeamNames = [];

    if (waterCount === highestTeamCount) {
      winningTeamNames.push("Team Water Wise");
    }
    if (zeroCount === highestTeamCount) {
      winningTeamNames.push("Team Net Zero");
    }
    if (powerCount === highestTeamCount) {
      winningTeamNames.push("Team Renewables");
    }

    welcomeMessage = `${welcomeMessage} Goal reached! Congratulations to ${winningTeamNames.join(" and ")}!`;
  }

  const greetingElement = document.getElementById("greeting");
  greetingElement.textContent = welcomeMessage;
  greetingElement.classList.add("success-message");
  greetingElement.style.display = "block";

  checkInForm.reset();
});
