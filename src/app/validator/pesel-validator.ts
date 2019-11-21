export function PeselValidate(peselNumber: any) {
  var regExpPattern = /^[0-9]{11}$/;

  if (!(regExpPattern.test(peselNumber.value))) {
    return {invalidPesel: true};
  } else {
    var digits = ("" + peselNumber.value).split("");

    if ((parseInt(peselNumber.value.substring(4, 6)) > 31) || (parseInt(peselNumber.value.substring(2, 4)) > 12)) {
      return {invalidPesel: true};
    }

    var checksum = (1 * parseInt(digits[0]) + 3 * parseInt(digits[1]) + 7 * parseInt(digits[2]) + 9 * parseInt(digits[3]) + 1 * parseInt(digits[4]) + 3 * parseInt(digits[5]) + 7 * parseInt(digits[6]) + 9 * parseInt(digits[7]) + 1 * parseInt(digits[8]) + 3 * parseInt(digits[9])) % 10;
    if (checksum == 0) {
      checksum = 10;
    }
    checksum = 10 - checksum;

    if (parseInt(digits[10]) == checksum) {
      return null;
    } else {
      return {invalidPesel: true};
    }
  }
}
