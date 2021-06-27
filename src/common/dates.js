
const dates = () => {

    let d = new Date()
    let y = d.getFullYear()
    let m = d.getMonth() + 1
    let m2 = d.getMonth()
    let m3 = d.getMonth() - 1
    let m4 = d.getMonth() - 2
    let m5 = d.getMonth() - 3
    let m6 = d.getMonth() - 4
    let m7 = d.getMonth() - 5
    let m8 = d.getMonth() - 6
    let m9 = d.getMonth() - 7
    let m10 = d.getMonth() - 8
    let m11 = d.getMonth() - 9
    let m12 = d.getMonth() - 10

    let months = [m, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12]
    let years = [y, y, y, y, y, y, y, y, y, y, y, y]
    let newYearIndex = 0
    // console.log(months)
    for (let i = 0; i < 13; i++) {

        if (months[i] === 0) {
            months[i] = 12
        }
        else if (months[i] === -1) {
            months[i] = 11
        }
        else if (months[i] === -2) {
            months[i] = 10
        }
        else if (months[i] === -3) {
            months[i] = 9
        }
        else if (months[i] === -4) {
            months[i] = 8
        }
        else if (months[i] === -5) {
            months[i] = 7
        }
        else if (months[i] === -6) {
            months[i] = 6
        }
        else if (months[i] === -7) {
            months[i] = 5
        }
        else if (months[i] === -8) {
            months[i] = 4
        }
        else if (months[i] === -9) {
            months[i] = 3
        }
        else if (months[i] === -10) {
            months[i] = 2
        }
        else if (months[i] === -11) {
            months[i] = 1
        }
    }
    for (let i = 0; i < 13; i++) {
        if (months[i] === 12) {
            newYearIndex = i
        }
    }
    for (let i = newYearIndex; i < 13; i++) {
        if (newYearIndex !== 0) {
            years[i] = years[0] - 1
        }
    }
    // console.log(newYearIndex)
    // console.log(years)
    // console.log(months)

    // y = y.toString()
    m = months[0].toString()
    m2 = months[1].toString()
    m3 = months[2].toString()
    m4 = months[3].toString()
    m5 = months[4].toString()
    m6 = months[5].toString()
    m7 = months[6].toString()
    m8 = months[7].toString()
    m9 = months[8].toString()
    m10 = months[9].toString()
    m11 = months[10].toString()
    m12 = months[11].toString()
    if (m.length !== 2) {
        m = '0' + m
    }
    if (m2.length !== 2) {
        m2 = '0' + m2
    }
    if (m3.length !== 2) {
        m3 = '0' + m3
    }
    if (m4.length !== 2) {
        m4 = '0' + m4
    }
    if (m5.length !== 2) {
        m5 = '0' + m5
    }
    if (m6.length !== 2) {
        m6 = '0' + m6
    }
    if (m7.length !== 2) {
        m7 = '0' + m7
    }
    if (m8.length !== 2) {
        m8 = '0' + m8
    }
    if (m9.length !== 2) {
        m9 = '0' + m9
    }
    if (m10.length !== 2) {
        m10 = '0' + m10
    }
    if (m11.length !== 2) {
        m11 = '0' + m11
    }
    if (m12.length !== 2) {
        m12 = '0' + m12
    }



    let date = years[0].toString() + '/' + m
    let date2 = years[1].toString() + '/' + m2
    let date3 = years[2].toString() + '/' + m3
    let date4 = years[3].toString() + '/' + m4
    let date5 = years[4].toString() + '/' + m5
    let date6 = years[5].toString() + '/' + m6
    let date7 = years[6].toString() + '/' + m7
    let date8 = years[7].toString() + '/' + m8
    let date9 = years[8].toString() + '/' + m9
    let date10 = years[9].toString() + '/' + m10
    let date11 = years[10].toString() + '/' + m11
    let date12 = years[11].toString() + '/' + m12




    return (
        [date, date2, date3, date4, date5, date6, date7, date8, date9, date10, date11, date12]
    )
}

export default dates
