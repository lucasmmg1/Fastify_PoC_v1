class DateFormatter
{
    static MILLIS =
    {
        second: 1000,
        minute: 60000,
        hour: 3600000,
        day: 86400000,
        week: 604800000,
        month: 2629800000,
        year: 31557600000
    }

    static utc(locale) // returns london
    {
        let dfo = new DateFormatterObject();
        let utc = dfo.utc();

        if (locale)
            utc.setLocale(locale);

        return utc;
    }
    static local(locale) // returns brazil
    {
        let dfo = new DateFormatterObject();
        let local = dfo.local();

        if (locale)
            local.setLocale(locale);

        return local;
    }
    static date(date, locale)
    {
        let dfo = new DateObject(date);

        if (locale)
            dfo.setLocale(locale);

        return dfo;
    }
}

class DateFormatterObject
{
    utc() // returns london
    {
        let utc = new Date().getTime() + (new Date().getTimezoneOffset() * 60 * 1000);
        let dfo = new DateObject(new Date(utc));
        return dfo;
    }
    local() // returns brazil
    {
        let local = new Date();
        let dfo = new DateObject(new Date(local));
        return dfo;
    }

}
class DateObject
{
    year;
    month;
    day;
    hour;
    minute;
    second;
    millisecond;
    time;
    timezone;
    locale;
    weekday;

    constructor(date)
    {
        this.year = date.getFullYear();
        this.month = date.getMonth() + 1;
        this.day = date.getDate();
        this.hour = date.getHours();
        this.minute = date.getMinutes();
        this.second = date.getSeconds();
        this.millisecond = date.getMilliseconds();
        this.time = date.getTime();
        this.timezone = date.getTimezoneOffset() / 60;
        this.setLocale('en', date);
    }

    simplified()
    {
        let dayString = this.day < 10 ? `0${this.day}` : this.day;
        let monthString = this.month < 10 ? `0${this.month}` : this.month;
        return `${this.year}-${monthString}-${dayString}`;
    }
    complete()
    {
        let dayString = this.day < 10 ? `0${this.day}` : this.day;
        let monthString = this.month < 10 ? `0${this.month}` : this.month;
        let hourString = this.hour < 10 ? `0${this.hour}` : this.hour;
        let minuteString = this.minute < 10 ? `0${this.minute}` : this.minute;
        let secondString = this.second < 10 ? `0${this.second}` : this.second;
        let millisecondString = this.millisecond < 10 ? `00${this.millisecond}` : this.millisecond < 100 ? `0${this.millisecond}` : this.millisecond;
        return `${this.year}-${monthString}-${dayString}T${hourString}:${minuteString}:${secondString}.${millisecondString}Z`;
    }
    formatted(options)
    {
        let date = new Date(this.year, this.month - 1, this.day, this.hour, this.minute, this.second, this.millisecond);
        return new Intl.DateTimeFormat(this.locale, options).format(date)
    }
    nDaysDifference(n, locale)
    {
        let dfo = new DateObject(new Date(this.time + (n * DateFormatter.MILLIS.day)));
        dfo.setLocale(locale);
        return dfo;
    }

    setLocale(locale, date)
    {
        this.locale = locale;
        this.weekday = new Intl.DateTimeFormat(this.locale, {weekday: 'long'}).format(date);
    }
}

export default DateFormatter;