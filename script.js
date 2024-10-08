// مصفوفة لتخزين بيانات الطلاب محلياً
let students = [];

// بيانات الأدمن الافتراضية (يمكن تعديلها لاحقًا)
const adminCredentials = {
    username: 'admin',
    password: 'admin123'
};

// إظهار صفحة تسجيل الدخول عند تحميل الصفحة
document.getElementById('login-container').classList.add('visible');

// وظيفة تسجيل الدخول للأدمن
function adminLogin() {
    const username = document.getElementById('admin-username').value;
    const password = document.getElementById('admin-password').value;

    if (username === adminCredentials.username && password === adminCredentials.password) {
        alert('تم تسجيل الدخول بنجاح!');

        // عرض واجهة تسجيل الطلاب
        document.getElementById('login-container').classList.remove('visible');
        document.getElementById('student-form-container').classList.add('visible');
    } else {
        alert('اسم المستخدم أو كلمة المرور غير صحيحة. حاول مرة أخرى.');
    }
}

// وظيفة تسجيل الطلاب
function registerStudent() {
    let name = document.getElementById('student-name').value;
    let number = document.getElementById('student-number').value;

    if (name && number) {
        students.push({ name, number });
        students.sort((a, b) => a.name.localeCompare(b.name, 'ar'));

        // إعادة تعيين الحقول بعد التسجيل
        document.getElementById('student-name').value = '';
        document.getElementById('student-number').value = '';

        alert(`تم التسجيل بنجاح! عدد الطلاب الحالي: ${students.length}`);

        // توليد ملف PDF تلقائيًا عند الوصول إلى 200 طالب
        if (students.length >= 200) {
            alert('تم الوصول إلى 200 طالب، سيتم توليد ملف PDF الآن.');
            generatePDF();
        }
    } else {
        alert('يرجى إدخال الاسم ورقم الطالب بشكل صحيح.');
    }
}

// وظيفة توليد PDF
function generatePDF() {
    students.sort((a, b) => a.name.localeCompare(b.name, 'ar'));

    // إعداد محتوى ملف PDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // إعداد النص في ملف PDF
    doc.setFontSize(12);
    let yPosition = 10;
    students.forEach((student, index) => {
        doc.text(`${index + 1}. ${student.name} - ${student.number}`, 10, yPosition);
        yPosition += 10; // الانتقال للأسفل لكل طالب
    });

    // حفظ ملف PDF وتحميله
    doc.save("students_data.pdf");
}
