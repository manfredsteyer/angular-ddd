export type CityFormat = 'short' | 'long';

export function getOfficialAirportName(city: string, format: CityFormat) {

    let short, long;

    switch (city) {
        case 'Frankfurt':
            short = 'FRA';
            long = 'Airport Frankfurt';
            break;
        case 'Hamburg':
            short = 'HAM';
            long = 'Airport Hamburg Helmut Schmidt';
            break;
        case 'Graz':
            short = 'GRZ';
            long = 'Flughafen Graz Thalerhof';
            break;
        default:
            short = long = city;
    }

    if (format === 'long') return long;
    return short;

}
