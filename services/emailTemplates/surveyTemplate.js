const keys = require('../../config/keys');

module.exports = (survey)=>{
    return `
        <html>
            <body>
                <div style="text-align:center;">
                    <h1>I'd love your Feedback</h1>
                    <p>Please Click one of the following button</p>
                    <p>${survey.body}</p>
                    <div>
                        <a href="${keys.feedbackRedirect}/api/surveys/${survey.id}/yes">Yes</a>
                    </div>
                    <div>
                        <a href="${keys.feedbackRedirect}/api/surveys/${survey.id}/no">No</a>
                    </div>
                </div>
            </body>
        </html>

    `;
};