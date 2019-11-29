export function getFullMounthDaysList(selectedDay) {
  var result = [];
  var tempDay = new Date(selectedDay.toISOString());

  var days = function daysInThisMonth() {
    var now = selectedDay;
    return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  }();

  for (var i = 1; i <= days; i++) {
    tempDay.setDate(i);
    result.push(new Date(tempDay.toISOString()));
  }

  return result;
}