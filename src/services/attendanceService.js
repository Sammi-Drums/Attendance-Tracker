export const checkIn = async (location) => {
    console.log("Checking in with location:", location);

    return {
        success: true,
        status: "present", // or "late"
        time: new Date().toISOString(),
    };
};

export const checkOut = async () => {
    return {
        success: true,
        time: new Date().toISOString(),
    };
};
