import React from 'react';


class Body extends React.Component {
    constructor() {
        super()

        this.state = {}
    }

    render() {
        return (
            <React.Fragment>
                <div className="title mt-5">
                    <h3 style={{ "color": "#F0123C" }}>Be in demand</h3>
                    <h2 className="">Learn the latest
                      <strong> tech skills </strong>
                        to
                  </h2>
                    <h2> propel your
                      <strong>career</strong> forward
                  </h2>

                    <div className="search">
                        <input placeholder="what do you want to learn?" />
                        <button className="searchBtn">Search</button>
                    </div>
                </div>

                <div className="brands offset-2 d-flex justify-content-around row">
                    <div>
                        <img className="brandimg" src="https://s3-alpha-sig.figma.com/img/1dc3/408b/d124ad8ee6457624f6cadc28a8f93ae5?Expires=1583107200&Signature=OBwWF5HUhaEh8cd35NB~ZlYfXEBs1t3nggny0FtNtUVCmH5MRfLbHetlmpVOFdD~Kf4Fy4XrRqhUAPoyBmPDJyQpFLH5VeuzUg3WlwwsX45s4YC7D5dgfCUfkJ82HRMwtlafv-8rvLoDcxAZkYny53IzQ~DG9RCxPEKpGwmmOH-rwrZHble1LjfWx9wTfH6UKf7sxGRaa~AzwG0H-IAKId9oY-FvaLUDWWbUhwRr5-F~U2CjQMaD2psTpYm2zIW9Atv8nkKbV9JdF9n50xakMAkcUZ8tdFrs4g6nheNj8kgnMvU2f32THn4KvstdQdkGGTdrBAQ2WYglN4MMxvG3JA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="..." />
                    </div>
                    <div>
                        <img className="brandimg" src="https://s3-alpha-sig.figma.com/img/8556/8bce/719debe8c6e8af2e04aa4fa4c5631ac5?Expires=1583107200&Signature=SKOqy4UPp9SVtyWWItWaWUDMdr0p7XEmNT7x2AXxxmKzRFEOIxmOnJmxEKcsoQCR4IuqTGkEAOtooQR3jE8DY-jgwvVLUllvot-mhev~Tu7~zVtahB-~uOW9JPgwrzxAACzpbfrZIQ5XNoPQFa~MUNpJAiz9JzPH0V0nQRRgRq6mt5par86DjMYT~xh57--aMnMb4hxlLOwl9fuF0wq526vhhBrEnW1aXfwmFbManoV0D5jsImVsfquXVP-~tjqRtX0pjFos41Prr4F3M2KHXRb-A2GTjnHFx-AhzWYvNJTwHL~nwe6tbfxsJsd1hYhIE4txGhAj~yvb-WO9vETjig__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="..." />
                    </div>
                    <div>
                        <img className="brandimg" src="https://s3-alpha-sig.figma.com/img/1cd8/c089/861717d744f56dd2e75adf3cfa5d69ab?Expires=1583107200&Signature=ZlnA4pfKN0OS2ilN9YaLABqfDoMxFO0MT9fhTOu6mSj0o1tv6yXqjKZammSzpTyooVa-sUL~rStKGYH8YpXy6~A4EPmu~vJ3oAYEjUHuQCpNsSrRhanJB0EH5ySst24DyrymqZawdcZVrtlyJ2S5MeE5qJU-k1B4w6IRNq1mlrVO~RRjmvr18DHUnjDO8uZ58K6Uj6K12kKhbsJ40YvyZC~-jmsJmMkQ09witgNcunSPVkxC7kUSkfVb2908rX6PWW9aDHtU5Lf6MPxM9FjaIVO-4fLl6kY0szMZVzjr226oowjwprjyNwruqFLeQFHH5KTLXKBRJ0M6wiy6hHDyiw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="..." />
                    </div>
                    <div>
                        <img className="brandimg" src="https://s3-alpha-sig.figma.com/img/dfad/7c95/2a8272a04051d0d3324c0f46d25875e1?Expires=1583107200&Signature=Hbgs4Sx79fj9ZWJ7aV~TzhUf6caJa11OUdJgN5dKGm7dkXEsHrEjaYYhZFQBPtaIIv-iPaBMjDcpnM8usB-Qm8~RVjRYDn-43euSIpgk4TPRdkXget7EE-UQjdKDvpGAr9eoiSfOtKPDQ~XK-5b7RjQNGg6PEeTxhaNerG7CS91xh8fTpqlk0mbRGYqJNyAeJVdYRptRuauDpyw5Lu8z2WKwNpSaNRHBvImwkeIr5gyR~sWQQ~PQTJWfNKM-qCil7eFN7cyH14Hgc~kRdIj7N7v44lV2Rz7uazRIciDRNfLY1VhhcoIjjx~ldphpJ1SH1aExvPRlwSJjn6ZnCu57KQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="..." />
                    </div>
                    <div>
                        <img className="brandimg" src="https://s3-alpha-sig.figma.com/img/4c39/e5d4/bfcbcdedc3f5c1bbf6ba3e4eb7448529?Expires=1583107200&Signature=AjlRFyI9sC-kiqOPiPINxtK3EmVNAPAkafFfvDU0jaFbxdP63Awf-WqwxNOTQMWWeBpVjZPmGxEx4DPAIr9KcMf53r1HoExcIyfR8tnYgMv55Yd3QTvEjzEa~WSvFj839PB2cbBI0jlAhuP~nDkjYSfnXQUcbTtGiNWYcLoNRCaVZfWl3YJWVmX60HIwbcjDXGCUWvaMY5uKa0T~4gOJVGQicpMkfYfD5ndmHGYttDI8j6dVNT8iJdDS4rHP1mEGpMv3HEuwoUCccLuFEIGz~g7ooeuN5yu5OghDQb3QvOjTmiQ3YLRfXF6cGJeNzpzZ2WB-vX6BAMp4jTXgtzLN-g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="..." />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Body;