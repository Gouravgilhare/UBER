const rideModel = require("../models/ride.model");
const mapService = require("../services/maps.service");

async function getFare(pickup, destination) {
  if (!pickup || !destination)
    throw new Error("Pickup  and Destination are required");

  const distanceTime = await service.getDistanceTime(pickup, destination);

  const baseFare = {
    auto: 30,
    car: 50,
    motorcycle: 20,
  };
  const perKmRate = {
    auto: 10,
    car: 15,
    motorcycle: 8,
  };
  const perMinuteRate = {
    auto: 3,
    car: 3,
    motorcycle: 1.5,
  };

  const fare = {
    auto: math.round(
      baseFare.auto +
        (distanceTime.distance.value / 1000) * perKmRate.auto +
        distanceTime.duration.value * (perMinuteRate.auto / 60)
    ),
    car: math.round(
      baseFare.car +
        (distanceTime.distance.value / 1000) * perKmRate.car +
        distanceTime.duration.value * (perMinuteRate.car / 60)
    ),
    motorcycle: math.round(
      baseFare.motorcycle +
        (distanceTime.distance.value / 1000) * perKmRate.motorcycle +
        duration.value * (perMinuteRate.motorcycle / 60)
    ),
  };

  return fare;
}
module.exports.getFare = getFare;

function getOtp(num) {
  function generateOtp(num) {
    const otp = crypto
      .randomInt(Math.pow(10, num - 1), Math.pow(10, num))
      .toString();
    return otp;
  }
  return generateOtp(num);
}

module.exports.createRide = async ({
  user,
  pickup,
  destination,
  vehicleType,
}) => {
  if (!user || !pickup || !destination || vehicleType)
    throw new Error("All fields are require");
  const fare = await getFare(pickup, destination);
  const ride = rideModel.create({
    user,
    pickup,
    destination,
    otp: getOtp(6),
    fare: fare[vehicleType],
  });
  return ride;
};
