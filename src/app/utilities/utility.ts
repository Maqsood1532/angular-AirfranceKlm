import { WeekDay } from "@angular/common";
import { Injectable } from "@angular/core";

@Injectable()
export class Utility {

    // public static getFormattedDate(today: Date) 
    // {
    //     var week = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
    //     var day  = week[today.getDay()];
    //     var dd   = today.getDate();
    //     var mm   = today.getMonth()+1; //January is 0!
    //     var yyyy = today.getFullYear();
    //     var hour = today.getHours();
    //     var minu = today.getMinutes();

    //     return day+' - '+dd+'/'+mm+'/'+yyyy+' '+hour+':'+minu;
    // }

    public static getDayOfWeek(date: string): string { 

        let dayOfWeek = "";
        const d = new Date(date);
        let day = d.getDay();

        switch (new Date().getDay()) {
            case WeekDay.Sunday:
                dayOfWeek = "SUN";
              break;
            case WeekDay.Monday:
                dayOfWeek = "MON";
              break;
            case WeekDay.Tuesday:
                dayOfWeek = "TUE";
              break;
            case WeekDay.Wednesday:
                dayOfWeek = "WED";
              break;
            case WeekDay.Thursday:
                dayOfWeek = "THU";
              break;
            case WeekDay.Friday:
                dayOfWeek = "FRI";
              break;
            case WeekDay.Saturday:
                dayOfWeek = "SAT";
          }

        return dayOfWeek;

    }
    
    public static getMonthName(date: string): string {

        const _date = new Date(date);  // 2009-11-10
        const month = _date.toLocaleString('default', { month: 'long' }).substring(0,3).toUpperCase();
        return month;
    }

    public static getDayAndYear(date: string): string {
        const _date = new Date(date)
        var dd   = _date.getDate();
        var yyyy = _date.getFullYear();

        return dd + ", " + yyyy;

    }

    

}