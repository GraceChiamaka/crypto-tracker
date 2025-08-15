import { countries, countryCodes } from "./data";

const convertFiletoBlobAndDownload = async (fileUrl: string, fileName: string = "countries.csv") => {
    const blob = await fetch(fileUrl).then((r) => r.blob());
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = fileName ?? "download";
    document.body.appendChild(a);
    a.click();
    window?.URL.revokeObjectURL(url);
    a.remove();
};

export const reformatCountries = () => {
    const newVals = Object.entries(countries).map((country) => {
        const [name, countryObj] = country;
        return {
            country_code: countryCodes[name as keyof typeof countryCodes],
            flag_code: name,
            currency: countryObj.currency[0] ?? "usd",
        };
    });

    const headers = Object.keys(newVals[0]);
    const rows = newVals.map((row) => headers.map((header) => `"${row[header as keyof typeof row] ?? ""}"`).join(","));
    const csvContent = [headers.join(","), ...rows].join("\n");

    const blobUrl = window?.URL.createObjectURL(new Blob([csvContent], { type: "text/csv;charset=utf-8;" }));
    convertFiletoBlobAndDownload(blobUrl, "countries.csv");
};
