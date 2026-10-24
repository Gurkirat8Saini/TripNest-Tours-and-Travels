const e = React.createElement;

function TripSearch() {
    const [destination, setDestination] = React.useState("");
    const [travelDate, setTravelDate] = React.useState("");
    const [travellers, setTravellers] = React.useState("2");

    function searchTrips(event) {
        event.preventDefault();

        if (!destination) {
            alert("Please select a destination.");
            return;
        }

        if (!travelDate) {
            alert("Please select your travel date.");
            return;
        }

        const selectedDate = new Date(travelDate + "T00:00:00");
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (selectedDate < today) {
            alert("Please select today or a future date.");
            return;
        }

        const params = new URLSearchParams({
            destination: destination,
            date: travelDate,
            travellers: travellers
        });

        window.location.href = "destinations.html?" + params.toString();
    }

    return e(
        "form",
        {
            className: "react-search-form",
            onSubmit: searchTrips
        },

        e(
            "div",
            { className: "react-search-item" },
            e("label", { htmlFor: "trip-destination" }, "DESTINATION"),
            e(
                "select",
                {
                    id: "trip-destination",
                    value: destination,
                    onChange: function (event) {
                        setDestination(event.target.value);
                    },
                    required: true
                },
                e("option", { value: "" }, "Where do you want to go?"),
                e("option", { value: "Amritsar" }, "Amritsar"),
                e("option", { value: "Goa" }, "Goa"),
                e("option", { value: "Kashmir" }, "Kashmir"),
                e("option", { value: "Manali" }, "Manali"),
                e("option", { value: "Jaipur" }, "Jaipur"),
                e("option", { value: "Kerala" }, "Kerala")
            )
        ),

        e(
            "div",
            { className: "react-search-item" },
            e("label", { htmlFor: "trip-date" }, "TRAVEL DATE"),
            e("input", {
                id: "trip-date",
                type: "date",
                value: travelDate,
                min: new Date().toLocaleDateString("en-CA"),
                onChange: function (event) {
                    setTravelDate(event.target.value);
                },
                required: true
            })
        ),

        e(
            "div",
            { className: "react-search-item" },
            e("label", { htmlFor: "trip-travellers" }, "TRAVELLERS"),
            e(
                "select",
                {
                    id: "trip-travellers",
                    value: travellers,
                    onChange: function (event) {
                        setTravellers(event.target.value);
                    }
                },
                e("option", { value: "1" }, "1 Traveller"),
                e("option", { value: "2" }, "2 Travellers"),
                e("option", { value: "3" }, "3 Travellers"),
                e("option", { value: "4" }, "4 Travellers"),
                e("option", { value: "5" }, "5 Travellers"),
                e("option", { value: "6" }, "6 Travellers"),
                e("option", { value: "7" }, "7 Travellers"),
                e("option", { value: "8" }, "8 Travellers"),
                e("option", { value: "9" }, "9 Travellers"),
                e("option", { value: "10" }, "10 Travellers")
            )
        ),

        e(
            "button",
            {
                type: "submit",
                className: "search-button"
            },
            "Search Trips"
        )
    );
}

const searchContainer = document.getElementById("react-trip-search");

if (searchContainer) {
    const root = ReactDOM.createRoot(searchContainer);
    root.render(e(TripSearch));
}