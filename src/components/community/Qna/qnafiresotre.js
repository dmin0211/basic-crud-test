import firebase from 'firebase/app'

function changeDateFormat(timestamp) {
    const date = timestamp.toDate()
    const now = new Date()
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    if (now.getDate() === day) {
        return hour + '시 ' + minute + '분'
    } else if (now.getMonth() === month) {
        return day + '일 ' + hour + '시 ' + minute + '분'
    } else if (now.getFullYear() === year) {
        return month + '월 ' + day + '일 ' + hour + '시 ' + minute + '분'
    } else {
        return year + '년' + month + '월 ' + day + '일 ' + hour + '시 ' + minute + '분'
    }
}

export function qnaCreat(new_qnaField) {
    console.log('hey')
    console.log(new_qnaField)
    firebase.firestore().collection("Community").doc('EC8MhXowR8xVFFW2G3zE')
        .collection('qnaBoard').add({
        title: new_qnaField.title,
        Content: new_qnaField.Content,
        clicks: 0,
        comments: 0,
        user: new_qnaField.user,
        upload: firebase.firestore.Timestamp.now()
    }).then(function () {
        console.log('Create!')
    }).then(function (err) {
        console.log(err)
    })
}

export function qnaRead(qnaField) {
    firebase.firestore().collection("Community").doc('EC8MhXowR8xVFFW2G3zE')
        .collection('qnaBoard').get().then(sn => {
        sn.forEach(doc => {
            const pushData = doc.data()
            {
                pushData.upload = changeDateFormat(pushData.upload), pushData.id = doc.id
            }
            qnaField.push(pushData)
        })
    })
}

// export function qnaOneRead(qna_docID) {
//     firebase.firestore().collection("Community").doc('EC8MhXowR8xVFFW2G3zE')
//         .collection('qnaBoard').doc(qna_docID).get().then(doc => {
//         console.log(Object.assign({},doc.data()))
//     }).catch(function (err) {
//         console.log(err)
//     })
//
// }
