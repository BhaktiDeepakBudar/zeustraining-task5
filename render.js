const courseData = [
    {
        img : "images/imageMask-1.svg",
        topic : "Acceleration",
        isfavourite : true,
        subject : "Physics",
        grade: {
            grade_no: 7,
            grade_plus: 2
        },
        syllabus: {
            units: 4,
            lessons: 18,
            topics: 24
        },
        classBy : ["Mr. Frank's Class B"],
        students: 50,
        duration: {
            from: '21-Jan-2020',
            to: '21-Aug-2020',
        }
    },
    {
        img : "images/imageMask-2.svg",
        topic : "Displacement,Velocity and Speed",
        isfavourite : true,
        subject : "Physics 2",
        grade: {
            grade_no: 6,
            grade_plus: 3
        },
        syllabus: {
            units: 2,
            lessons: 15,
            topics: 20
        },
        classBy : [],
        students: null,
        duration: null
    },
    {
        img : "images/imageMask.svg",
        topic : "Introduction to Biology",
        isfavourite : true,
        subject : "Biology",
        grade: {
            grade_no: 4,
            grade_plus: 1
        },
        syllabus: {
            units: 5,
            lessons: 16,
            topics: 22
        },
        classBy : ["All Classes"],
        students: 300,
        duration: null
    },
    {
        img : "images/imageMask-3.svg",
        topic : "Introduction to High School Mathematics",
        isfavourite : false,
        subject : "Physics",
        grade: {
            grade_no: 7,
            grade_plus: 2
        },
        syllabus: {
            units: 23,
            lessons: 18,
            topics: 24
        },
        classBy : ["Mr. Frank's Class A"],
        students: 44,
        duration: {
            from: '14-Oct-2019',
            to: '20-Oct-2020',
        }
    }

];
function renderCourse(course)
{
    let bottomArray = [];
    if (course.students) {
        bottomArray.push(`${course.students} students`);
    }
    if (course.duration) {
        bottomArray.push(`${course.duration.from} - ${course.duration.to}`);
    }
    const bottomLine = bottomArray.join(' | ');
    if (course.classBy.length === 0) {
        course.classBy = "No Class";
    }
    var options= [];
    for (var i = 0; i < course.classBy.length; i++) {
        options.push(`<option value="${course.classBy[i]}">${course.classBy[i]}</option>`);
    }
    return `
    <div class = "course1">
        <div class = "course-container">
            <div class="course-main">
                <div class="course-image">
                    <img src="${course.img}" alt="Acceleration course image">
                </div>
                <div class="course-info">
                    <div class="heading-course">
                        <h2>${course.topic}</h2>
                        ${course.isfavourite ? `<img src="images/favourite.svg" alt="favourite icon">` : `<img src="images/favourite.svg" alt="favourite icon" style="filter: grayscale(100%);">`}
                    </div>
                    <p class="course-writing">${course.subject}\t|\t${course.grade.grade_no}\t<span>+${course.grade.grade_plus}</span></p>
                    <p class="course-writing"><strong>${course.syllabus.units}</strong>\tUnits\t<strong>${course.syllabus.lessons}</strong>\tLessons\t<strong>${course.syllabus.topics}</strong>\tTopics</p>
                    ${
                        course.classBy !== "No Class" ?
                        `
                            <select class="remove-styles course-sel" name="course-select">
                                ${options}
                            </select>
                            <p class="course-writing">${bottomLine}</p>
                        ` :
                        `
                            <select class="remove-styles course-sel" name="course-select" disabled>
                                <option value="" selected>${course.classBy}</option>
                            </select>
                            <p></p>                        `
                    } 
                </div>
            </div>
            <div class="course-footer-container">
                <div class="course-footer">
                    <img src="images/preview.svg" alt="Course Preview button" style="width: 22px;">
                    <img src="images/manage-course.svg" alt="Manage courses button">
                    <img src="images/grade-submissions.svg" alt="Grade submissions button">
                    <img src="images/reports.svg" alt="reports of courses button">
                </div>
            </div>
        </div>
    </div>
    `  
}
const courseid = document.querySelector("#course-container1")
courseid.insertAdjacentHTML('beforeend', `
${courseData.map(renderCourse).join('')}
`
);
