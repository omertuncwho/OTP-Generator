function generateOTP(length) {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let OTP = '';

    for (let i = 0; i < length; i++) {
        OTP += chars[Math.floor(Math.random() * chars.length)];
    }

    return OTP;
}

document.getElementById('generateOTP').addEventListener('click', function () {
    const OTP = generateOTP(6);
    document.getElementById('otpDisplay').innerText = 'Your OTP: ' + OTP;
});
