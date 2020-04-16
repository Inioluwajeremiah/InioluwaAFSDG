const covid19ImpactEstimator = (data) => data;
function results() {
  const currentlyInfected = (document.getElementById('reportedCases').value * 10).toString();
  const d = (document.getElementById('days').value).toString();
  const bed = (document.getElementById('beds').value).toString();
  const icomeDuration = (document.getElementById("incomeduration").value).toString();
  const percen = (document.getElementById("perc").value).toString();
  const averageDailyIncome = (document.getElementById("income").value).toString();


  document.write("Currently Infected: " + currentlyInfected + " <br> ");
  var days;

  if (document.getElementById('month') ) {
     days = (d * 30 / 3).toString();
  }
  else if (document.getElementById('week') ) {
     days = (d * 7 / 3).toString();
  }
else {
  days = (d * 1 / 3).toString();
}

  infectionsByRequestedTime = (currentlyInfected * Math.pow(2, days)).toString();
  document.write("Infected by Request Time: " + infectionsByRequestedTime + " <br> ");

  severeCasesByRequestedTime = (15/100 * infectionsByRequestedTime).toString();
  document.write("severeCasesByRequestedTime : " + severeCasesByRequestedTime + " <br> ");

   hospitalBedsByRequestedTime = (bed - severeCasesByRequestedTime).toString();
   document.write("Available beds: " + hospitalBedsByRequestedTime + " <br> ");

   casesForICUByRequestedTime =  (5/100 * infectionsByRequestedTime).toString();
   document.write(" casesForICUByRequestedTime: " + casesForICUByRequestedTime + " <br> ");

   casesForVentilatorsByRequestedTime = (2/100 * infectionsByRequestedTime).toString();
   document.write("casesForVentilatorsByRequestedTime: " + casesForVentilatorsByRequestedTime + " <br> ");

   dollarsInFlight = (infectionsByRequestedTime * percen * averageDailyIncome)/ icomeDuration;
   document.write("dollarsInFlight: " + dollarsInFlight);

}
export default covid19ImpactEstimator;
