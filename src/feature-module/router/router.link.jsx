import { lazy, Suspense } from "react";
import { Navigate, Route } from "react-router";
import { all_routes } from "./all_routes";

// Lazy loading wrapper component
const LazyLoad = ({ component: Component }) => (
  <Suspense fallback={<div className="d-flex justify-content-center align-items-center vh-100"><div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div></div>}>
    <Component />
  </Suspense>
);

// Auth Components
const Login = lazy(() => import("../auth/login/login"));
const Register = lazy(() => import("../auth/register/register"));
const TwoStepVerification = lazy(() => import("../auth/twoStepVerification/twoStepVerification"));
const EmailVerification = lazy(() => import("../auth/emailVerification/emailVerification"));
const ResetPassword = lazy(() => import("../auth/resetPassword/resetPassword"));
const ForgotPassword = lazy(() => import("../auth/forgotPassword/forgotPassword"));
const Login2 = lazy(() => import("../auth/login/login-2"));
const Login3 = lazy(() => import("../auth/login/login-3"));
const ResetPassword2 = lazy(() => import("../auth/resetPassword/resetPassword-2"));
const ResetPassword3 = lazy(() => import("../auth/resetPassword/resetPassword-3"));
const TwoStepVerification2 = lazy(() => import("../auth/twoStepVerification/twoStepVerification-2"));
const TwoStepVerification3 = lazy(() => import("../auth/twoStepVerification/twoStepVerification-3"));
const Register2 = lazy(() => import("../auth/register/register-2"));
const Register3 = lazy(() => import("../auth/register/register-3"));
const ForgotPassword2 = lazy(() => import("../auth/forgotPassword/forgotPassword-2"));
const ForgotPassword3 = lazy(() => import("../auth/forgotPassword/forgotPassword-3"));
const ResetPasswordSuccess = lazy(() => import("../auth/resetPasswordSuccess/resetPasswordSuccess"));
const ResetPasswordSuccess2 = lazy(() => import("../auth/resetPasswordSuccess/resetPasswordSuccess-2"));
const ResetPasswordSuccess3 = lazy(() => import("../auth/resetPasswordSuccess/resetPasswordSuccess-3"));
const LockScreen = lazy(() => import("../auth/lockScreen"));
const EmailVerification2 = lazy(() => import("../auth/emailVerification/emailVerification-2"));
const EmailVerification3 = lazy(() => import("../auth/emailVerification/emailVerification-3"));

// Dashboard Components
const AdminDashboard = lazy(() => import("../mainMenu/adminDashboard"));
const ParentDashboard = lazy(() => import("../mainMenu/parentDashboard"));
const TeacherDashboard = lazy(() => import("../mainMenu/teacherDashboard"));
const StudentDasboard = lazy(() => import("../mainMenu/studentDashboard"));

// Application Components
const AudioCall = lazy(() => import("../application/call/audioCall"));
const CallHistory = lazy(() => import("../application/call/callHistory"));
const Videocall = lazy(() => import("../application/call/videoCall"));
const Chat = lazy(() => import("../application/chat"));
const Email = lazy(() => import("../application/email"));
const FileManager = lazy(() => import("../application/fileManager"));
const Todo = lazy(() => import("../application/todo"));
const Calendar = lazy(() => import("../mainMenu/apps/calendar"));
const Notes = lazy(() => import("../application/notes"));

// Error Pages
const Error404 = lazy(() => import("../pages/error/error-404"));
const Error500 = lazy(() => import("../pages/error/error-500"));

// UI Interface Components
const Ribbon = lazy(() => import("../uiInterface/advanced-ui/ribbon"));
const ClipBoard = lazy(() => import("../uiInterface/advanced-ui/clipboard"));
const Counter = lazy(() => import("../uiInterface/advanced-ui/counter"));
const RangeSlides = lazy(() => import("../uiInterface/advanced-ui/rangeslider"));
const Rating = lazy(() => import("../uiInterface/advanced-ui/rating"));
const Stickynote = lazy(() => import("../uiInterface/advanced-ui/stickynote"));
const TextEditor = lazy(() => import("../uiInterface/advanced-ui/texteditor"));
const Scrollbar = lazy(() => import("../uiInterface/advanced-ui/uiscrollbar"));
const Timeline = lazy(() => import("../uiInterface/advanced-ui/timeline"));

// Base UI Components
const AlertUi = lazy(() => import("../uiInterface/base-ui/alert-ui"));
const Badges = lazy(() => import("../uiInterface/base-ui/badges"));
const Borders = lazy(() => import("../uiInterface/base-ui/borders"));
const Buttons = lazy(() => import("../uiInterface/base-ui/buttons"));
const ButtonsGroup = lazy(() => import("../uiInterface/base-ui/buttonsgroup"));
const Cards = lazy(() => import("../uiInterface/base-ui/cards"));
const Colors = lazy(() => import("../uiInterface/base-ui/colors"));
const Dropdowns = lazy(() => import("../uiInterface/base-ui/dropdowns"));
const Images = lazy(() => import("../uiInterface/base-ui/images"));
const Lightboxes = lazy(() => import("../uiInterface/base-ui/lightbox"));
const Media = lazy(() => import("../uiInterface/base-ui/media"));
const Modals = lazy(() => import("../uiInterface/base-ui/modals"));
const NavTabs = lazy(() => import("../uiInterface/base-ui/navtabs"));
const Popovers = lazy(() => import("../uiInterface/base-ui/popover"));
const Toasts = lazy(() => import("../uiInterface/base-ui/toasts"));
const Tooltips = lazy(() => import("../uiInterface/base-ui/tooltips"));
const Accordion = lazy(() => import("../uiInterface/base-ui/accordion"));
const Avatar = lazy(() => import("../uiInterface/base-ui/avatar"));
const Breadcrumb = lazy(() => import("../uiInterface/base-ui/breadcrumb"));
const Carousel = lazy(() => import("../uiInterface/base-ui/carousel"));
const Offcanvas = lazy(() => import("../uiInterface/base-ui/offcanvas"));
const Pagination = lazy(() => import("../uiInterface/base-ui/pagination"));
const Progress = lazy(() => import("../uiInterface/base-ui/progress"));
const Spinner = lazy(() => import("../uiInterface/base-ui/spinner"));
const Typography = lazy(() => import("../uiInterface/base-ui/typography"));
const Placeholder = lazy(() => import("../uiInterface/base-ui/placeholder"));
const Alert = lazy(() => import("../uiInterface/base-ui/alert"));
const Video = lazy(() => import("../uiInterface/base-ui/video"));

// Charts
const Apexchart = lazy(() => import("../uiInterface/charts/apexcharts"));

// Forms
const BasicInputs = lazy(() => import("../uiInterface/forms/formelements/basic-inputs"));
const CheckboxRadios = lazy(() => import("../uiInterface/forms/formelements/checkbox-radios"));
const FileUpload = lazy(() => import("../uiInterface/forms/formelements/fileupload"));
const FloatingLabel = lazy(() => import("../uiInterface/forms/formelements/layouts/floating-label"));
const FormMask = lazy(() => import("../uiInterface/forms/formelements/form-mask"));
const FormWizard = lazy(() => import("../uiInterface/forms/formelements/form-wizard"));
const GridGutters = lazy(() => import("../uiInterface/forms/formelements/grid-gutters"));
const FormHorizontal = lazy(() => import("../uiInterface/forms/formelements/layouts/form-horizontal"));
const FormSelect2 = lazy(() => import("../uiInterface/forms/formelements/layouts/form-select2"));
const FormValidation = lazy(() => import("../uiInterface/forms/formelements/layouts/form-validation"));
const FormVertical = lazy(() => import("../uiInterface/forms/formelements/layouts/form-vertical"));
const InputGroup = lazy(() => import("../uiInterface/forms/formelements/input-group"));
const FormSelect = lazy(() => import("../uiInterface/forms/formelements/form-select"));

// Icons
const FontawesomeIcons = lazy(() => import("../uiInterface/icons/fontawesome"));
const FlagIcons = lazy(() => import("../uiInterface/icons/flagicons.jsx"));
const IonicIcons = lazy(() => import("../uiInterface/icons/ionicicons"));
const MaterialIcons = lazy(() => import("../uiInterface/icons/materialicon"));
const PE7Icons = lazy(() => import("../uiInterface/icons/pe7icons"));
const ThemifyIcons = lazy(() => import("../uiInterface/icons/themify"));
const TypiconIcons = lazy(() => import("../uiInterface/icons/typicons"));
const WeatherIcons = lazy(() => import("../uiInterface/icons/weathericons"));

// Tables
const DataTables = lazy(() => import("../uiInterface/table/data-tables"));
const TablesBasic = lazy(() => import("../uiInterface/table/tables-basic"));

// Academic Components
const AcademicReason = lazy(() => import("../academic/academic-reason/index.jsx"));
const ClassHomeWork = lazy(() => import("../academic/class-home-work/index.jsx"));
const ClassRoom = lazy(() => import("../academic/class-room/index.jsx"));
const ClassRoutine = lazy(() => import("../academic/class-routine/index.jsx"));
const ClassSection = lazy(() => import("../academic/class-section/index.jsx"));
const ClassSubject = lazy(() => import("../academic/class-subject/index.jsx"));
const ClassSyllabus = lazy(() => import("../academic/class-syllabus"));
const ClassTimetable = lazy(() => import("../academic/class-timetable"));
const Classes = lazy(() => import("../academic/classes"));
const Exam = lazy(() => import("../academic/examinations/exam"));
const ExamAttendance = lazy(() => import("../academic/examinations/exam-attendance"));
const ExamResult = lazy(() => import("../academic/examinations/exam-results"));
const ExamSchedule = lazy(() => import("../academic/examinations/exam-schedule"));
const Grade = lazy(() => import("../academic/examinations/grade"));
const ScheduleClasses = lazy(() => import("../academic/schedule-classes"));

// Accounts Components
const AccountsIncome = lazy(() => import("../accounts/accounts-income.jsx"));
const AccountsInvoices = lazy(() => import("../accounts/accounts-invoices.jsx"));
const AccountsTransactions = lazy(() => import("../accounts/accounts-transactions.jsx"));
const AddInvoice = lazy(() => import("../accounts/add-invoice.jsx"));
const EditInvoice = lazy(() => import("../accounts/edit-invoice.jsx"));
const Expense = lazy(() => import("../accounts/expense.jsx"));
const ExpensesCategory = lazy(() => import("../accounts/expenses-category.jsx"));
const Invoice = lazy(() => import("../accounts/invoice.jsx"));

// Announcements
const Events = lazy(() => import("../announcements/events.jsx"));
const NoticeBoard = lazy(() => import("../announcements/notice-board.jsx"));

// Content - Blog
const AllBlogs = lazy(() => import("../content/blog/allBlogs.jsx"));
const BlogCategories = lazy(() => import("../content/blog/blogCategories"));
const BlogComments = lazy(() => import("../content/blog/blogComments"));
const BlogTags = lazy(() => import("../content/blog/blogTags"));
const Faq = lazy(() => import("../content/faq"));

// Content - Location
const Cities = lazy(() => import("../content/location/cities"));
const Countries = lazy(() => import("../content/location/countries"));
const States = lazy(() => import("../content/location/states.jsx"));

// Content - Others
const Pages = lazy(() => import("../content/pages"));
const Testimonials = lazy(() => import("../content/testimonials"));

// HRM - Attendance
const StaffAttendance = lazy(() => import("../hrm/attendance/staff-attendance"));
const StudentAttendance = lazy(() => import("../hrm/attendance/student-attendance"));
const TeacherAttendance = lazy(() => import("../hrm/attendance/teacher-attendance.jsx"));

// HRM - Others
const Departments = lazy(() => import("../hrm/departments"));
const Designation = lazy(() => import("../hrm/designation/index.jsx"));
const Holiday = lazy(() => import("../hrm/holidays"));
const ApproveRequest = lazy(() => import("../hrm/leaves/approve-request"));
const ListLeaves = lazy(() => import("../hrm/leaves/list-leaves"));
const Payroll = lazy(() => import("../hrm/payroll"));

// HRM - Staff
const AddStaff = lazy(() => import("../hrm/staff-list/add-staff"));
const EditStaff = lazy(() => import("../hrm/staff-list/edit-staff"));
const Staff = lazy(() => import("../hrm/staff-list/staff"));
const StaffDetails = lazy(() => import("../hrm/staff-list/staff-details.jsx"));
const StaffLeave = lazy(() => import("../hrm/staff-list/staff-leave/index.jsx"));
const StaffPayRoll = lazy(() => import("../hrm/staff-list/staff-payroll.jsx/index.jsx"));
const StaffsAttendance = lazy(() => import("../hrm/staff-list/staffs-attendance/index.jsx"));

// Management - Fees Collection
const CollectFees = lazy(() => import("../management/feescollection/collectFees.jsx"));
const FeesAssign = lazy(() => import("../management/feescollection/feesAssign.jsx"));
const FeesGroup = lazy(() => import("../management/feescollection/feesGroup.jsx"));
const FeesMaster = lazy(() => import("../management/feescollection/feesMaster.jsx"));
const FeesTypes = lazy(() => import("../management/feescollection/feesTypes.jsx"));

// Management - Hostel
const HostelList = lazy(() => import("../management/hostel/hostelList.jsx"));
const HostelRooms = lazy(() => import("../management/hostel/hostelRooms.jsx"));
const HostelType = lazy(() => import("../management/hostel/hostelType.jsx"));

// Management - Library
const Books = lazy(() => import("../management/library/books.jsx"));
const IssueBook = lazy(() => import("../management/library/issuesBook.jsx"));
const LibraryMember = lazy(() => import("../management/library/libraryMember.jsx"));
const ReturnBook = lazy(() => import("../management/library/returnBook.jsx"));

// Management - Sports
const PlayersList = lazy(() => import("../management/sports/playersList.jsx"));
const SportsList = lazy(() => import("../management/sports/sportsList.jsx"));

// Management - Transport
const TransportAssignVehicle = lazy(() => import("../management/transport/transportAssignVehicle.jsx"));
const TransportPickupPoints = lazy(() => import("../management/transport/transportPickupPoints.jsx"));
const TransportRoutes = lazy(() => import("../management/transport/transportRoutes.jsx"));
const TransportVehicle = lazy(() => import("../management/transport/transportVehicle.jsx"));
const TransportVehicleDrivers = lazy(() => import("../management/transport/transportVehicleDrivers.jsx"));

// Membership
const MembershipAddon = lazy(() => import("../membership/membershipaddon.jsx"));
const Membershipplan = lazy(() => import("../membership/membershipplan.jsx"));
const MembershipTransaction = lazy(() => import("../membership/membershiptrasaction.jsx"));

// Pages
const BlankPage = lazy(() => import("../pages/blankPage.jsx"));
const ComingSoon = lazy(() => import("../pages/comingSoon.jsx"));
const Profile = lazy(() => import("../pages/profile/index.jsx"));
const NotificationActivities = lazy(() => import("../pages/profile/activities.jsx"));
const UnderMaintenance = lazy(() => import("../pages/underMaintenance.jsx"));

// Peoples - Guardian
const GuardianGrid = lazy(() => import("../peoples/guardian/guardian-grid"));
const GuardianList = lazy(() => import("../peoples/guardian/guardian-list"));

// Peoples - Parent
const ParentGrid = lazy(() => import("../peoples/parent/parent-grid"));
const ParentList = lazy(() => import("../peoples/parent/parent-list"));

// Peoples - Students
const AddStudent = lazy(() => import("../peoples/students/add-student"));
const StudentDetails = lazy(() => import("../peoples/students/student-details/studentDetails"));
const StudentFees = lazy(() => import("../peoples/students/student-details/studentFees"));
const StudentLeaves = lazy(() => import("../peoples/students/student-details/studentLeaves"));
const StudentLibrary = lazy(() => import("../peoples/students/student-details/studentLibrary"));
const StudentResult = lazy(() => import("../peoples/students/student-details/studentResult"));
const StudentTimeTable = lazy(() => import("../peoples/students/student-details/studentTimeTable"));
const StudentList = lazy(() => import("../peoples/students/student-list"));
const StudentPromotion = lazy(() => import("../peoples/students/student-promotion"));
const StudentGrid = lazy(() => import("../peoples/students/student-grid/index.jsx"));

// Peoples - Teacher
const TeacherDetails = lazy(() => import("../peoples/teacher/teacher-details/teacherDetails.jsx"));
const TeacherLeave = lazy(() => import("../peoples/teacher/teacher-details/teacherLeave.jsx"));
const TeacherLibrary = lazy(() => import("../peoples/teacher/teacher-details/teacherLibrary.jsx"));
const TeacherSalary = lazy(() => import("../peoples/teacher/teacher-details/teacherSalary.jsx"));
const TeachersRoutine = lazy(() => import("../peoples/teacher/teacher-details/teachersRoutine.jsx"));
const TeacherGrid = lazy(() => import("../peoples/teacher/teacher-grid"));
const TeacherList = lazy(() => import("../peoples/teacher/teacher-list"));
const TeacherForm = lazy(() => import("../peoples/teacher/teacherForm"));

// Reports - Attendance
const AttendanceReport = lazy(() => import("../report/attendance-report/attendanceReport.jsx"));
const DailyAttendance = lazy(() => import("../report/attendance-report/dailyAttendance.jsx"));
const StaffDayWise = lazy(() => import("../report/attendance-report/staffDayWise.jsx"));
const StaffReport = lazy(() => import("../report/attendance-report/staffReport.jsx"));
const StudentAttendanceType = lazy(() => import("../report/attendance-report/studentAttendanceType.jsx"));
const StudentDayWise = lazy(() => import("../report/attendance-report/studentDayWise.jsx"));
const TeacherDayWise = lazy(() => import("../report/attendance-report/teacherDayWise.jsx"));
const TeacherReport = lazy(() => import("../report/attendance-report/teacherReport.jsx"));

// Reports - Others
const ClassReport = lazy(() => import("../report/class-report/classReport.jsx"));
const FeesReport = lazy(() => import("../report/fees-report/feesReport.jsx"));
const GradeReport = lazy(() => import("../report/grade-report/gradeReport.jsx"));
const LeaveReport = lazy(() => import("../report/leave-report/leaveReport.jsx"));
const StudentReport = lazy(() => import("../report/student-report/studentReport.jsx"));

// Settings - Academic
const Religion = lazy(() => import("../settings/academicSettings/religion.jsx"));
const SchoolSettings = lazy(() => import("../settings/academicSettings/schoolSettings.jsx"));

// Settings - App
const CustomFields = lazy(() => import("../settings/appSettings/customFields.jsx"));
const InvoiceSettings = lazy(() => import("../settings/appSettings/invoiceSettings.jsx"));

// Settings - Financial
const PaymentGateways = lazy(() => import("../settings/financialSettings/paymentGateways.jsx"));
const TaxRates = lazy(() => import("../settings/financialSettings/taxRates.jsx"));

// Settings - General
const ConnectedApps = lazy(() => import("../settings/generalSettings/connectedApps.jsx"));
const Notificationssettings = lazy(() => import("../settings/generalSettings/notifications.jsx"));
const Profilesettings = lazy(() => import("../settings/generalSettings/profile.jsx"));
const Securitysettings = lazy(() => import("../settings/generalSettings/security.jsx"));

// Settings - Other
const BanIpAddress = lazy(() => import("../settings/otherSettings/banIpaddress.jsx"));
const Storage = lazy(() => import("../settings/otherSettings/storage.jsx"));

// Settings - System
const Emailtemplates = lazy(() => import("../settings/systemSettings/email-templates.jsx"));
const EmailSettings = lazy(() => import("../settings/systemSettings/emailSettings.jsx"));
const GdprCookies = lazy(() => import("../settings/systemSettings/gdprCookies.jsx"));
const OtpSettings = lazy(() => import("../settings/systemSettings/otp-settings.jsx"));
const SmsSettings = lazy(() => import("../settings/systemSettings/smsSettings.jsx"));

// Settings - Website
const CompanySettings = lazy(() => import("../settings/websiteSettings/companySettings.jsx"));
const Languagesettings = lazy(() => import("../settings/websiteSettings/language.jsx"));
const Localization = lazy(() => import("../settings/websiteSettings/localization.jsx"));
const Preference = lazy(() => import("../settings/websiteSettings/preference.jsx"));
const Prefixes = lazy(() => import("../settings/websiteSettings/prefixes.jsx"));
const Socialauthentication = lazy(() => import("../settings/websiteSettings/socialAuthentication.jsx"));

// Support
const ContactMessages = lazy(() => import("../support/contactMessages.jsx"));
const TicketDetails = lazy(() => import("../support/ticket-details.jsx"));
const TicketGrid = lazy(() => import("../support/ticket-grid.jsx"));
const Tickets = lazy(() => import("../support/tickets.jsx"));

// User Management
const DeleteRequest = lazy(() => import("../userManagement/deleteRequest/index.jsx"));
const Manageusers = lazy(() => import("../userManagement/manageusers.jsx"));
const Permission = lazy(() => import("../userManagement/permission.jsx"));
const RolesPermissions = lazy(() => import("../userManagement/rolesPermissions.jsx"));

const routes = all_routes;

export const publicRoutes = [
  {
    path: "/",
    name: "Root",
    element: <Navigate to="/login" />,
    route: Route,
  },
  {
    path: routes.adminDashboard,
    element: <LazyLoad component={AdminDashboard} />,
    route: Route,
  },
  {
    path: routes.teacherDashboard,
    element: <LazyLoad component={TeacherDashboard} />,
    route: Route,
  },
  {
    path: routes.studentDashboard,
    element: <LazyLoad component={StudentDasboard} />,
    route: Route,
  },
  {
    path: routes.parentDashboard,
    element: <LazyLoad component={ParentDashboard} />,
    route: Route,
  },
  {
    path: routes.audioCall,
    element: <LazyLoad component={AudioCall} />,
    route: Route,
  },
  {
    path: routes.callHistory,
    element: <LazyLoad component={CallHistory} />,
    route: Route,
  },
  {
    path: routes.connectedApps,
    element: <LazyLoad component={ConnectedApps} />,
    route: Route,
  },
  {
    path: routes.countries,
    element: <LazyLoad component={Countries} />,
    route: Route,
  },
  {
    path: routes.blankPage,
    element: <LazyLoad component={BlankPage} />,
    route: Route,
  },
  {
    path: routes.calendar,
    element: <LazyLoad component={Calendar} />,
    route: Route,
  },
  {
    path: routes.membershipplan,
    element: <LazyLoad component={Membershipplan} />,
  },
  {
    path: routes.membershipAddon,
    element: <LazyLoad component={MembershipAddon} />,
  },
  {
    path: routes.membershipTransaction,
    element: <LazyLoad component={MembershipTransaction} />,
  },
  {
    path: routes.notes,
    element: <LazyLoad component={Notes} />,
  },
  {
    path: routes.customFields,
    element: <LazyLoad component={CustomFields} />,
    route: Route,
  },
  {
    path: routes.deleteRequest,
    element: <LazyLoad component={DeleteRequest} />,
    route: Route,
  },
  {
    path: routes.cities,
    element: <LazyLoad component={Cities} />,
    route: Route,
  },
  {
    path: routes.accordion,
    element: <LazyLoad component={Accordion} />,
    route: Route,
  },
  {
    path: routes.avatar,
    element: <LazyLoad component={Avatar} />,
    route: Route,
  },
  {
    path: routes.badges,
    element: <LazyLoad component={Badges} />,
    route: Route,
  },
  {
    path: routes.border,
    element: <LazyLoad component={Borders} />,
    route: Route,
  },
  {
    path: routes.breadcrums,
    element: <LazyLoad component={Breadcrumb} />,
    route: Route,
  },
  {
    path: routes.button,
    element: <LazyLoad component={Buttons} />,
    route: Route,
  },
  {
    path: routes.buttonGroup,
    element: <LazyLoad component={ButtonsGroup} />,
    route: Route,
  },
  {
    path: routes.cards,
    element: <LazyLoad component={Cards} />,
    route: Route,
  },
  {
    path: routes.carousel,
    element: <LazyLoad component={Carousel} />,
    route: Route,
  },
  {
    path: routes.colors,
    element: <LazyLoad component={Colors} />,
    route: Route,
  },
  {
    path: routes.dropdowns,
    element: <LazyLoad component={Dropdowns} />,
    route: Route,
  },
  {
    path: routes.images,
    element: <LazyLoad component={Images} />,
    route: Route,
  },
  {
    path: routes.lightbox,
    element: <LazyLoad component={Lightboxes} />,
    route: Route,
  },
  {
    path: routes.media,
    element: <LazyLoad component={Media} />,
    route: Route,
  },
  {
    path: routes.modals,
    element: <LazyLoad component={Modals} />,
    route: Route,
  },
  {
    path: routes.navTabs,
    element: <LazyLoad component={NavTabs} />,
    route: Route,
  },
  {
    path: routes.offcanvas,
    element: <LazyLoad component={Offcanvas} />,
    route: Route,
  },
  {
    path: routes.pagination,
    element: <LazyLoad component={Pagination} />,
    route: Route,
  },
  {
    path: routes.popover,
    element: <LazyLoad component={Popovers} />,
    route: Route,
  },
  {
    path: routes.rangeSlider,
    element: <LazyLoad component={RangeSlides} />,
    route: Route,
  },
  {
    path: routes.progress,
    element: <LazyLoad component={Progress} />,
    route: Route,
  },
  {
    path: routes.spinner,
    element: <LazyLoad component={Spinner} />,
    route: Route,
  },
  {
    path: routes.typography,
    element: <LazyLoad component={Typography} />,
    route: Route,
  },
  {
    path: routes.video,
    element: <LazyLoad component={Video} />,
    route: Route,
  },
  {
    path: routes.toasts,
    element: <LazyLoad component={Toasts} />,
    route: Route,
  },
  {
    path: routes.banIpAddress,
    element: <LazyLoad component={BanIpAddress} />,
    route: Route,
  },
  {
    path: routes.preference,
    element: <LazyLoad component={Preference} />,
    route: Route,
  },
  {
    path: routes.todo,
    element: <LazyLoad component={Todo} />,
    route: Route,
  },
  {
    path: routes.email,
    element: <LazyLoad component={Email} />,
    route: Route,
  },
  {
    path: routes.videoCall,
    element: <LazyLoad component={Videocall} />,
    route: Route,
  },
  {
    path: routes.chat,
    element: <LazyLoad component={Chat} />,
    route: Route,
  },
  {
    path: routes.pages,
    element: <LazyLoad component={Pages} />,
    route: Route,
  },
  {
    path: routes.fileManager,
    element: <LazyLoad component={FileManager} />,
    route: Route,
  },
  {
    path: routes.faq,
    element: <LazyLoad component={Faq} />,
    route: Route,
  },
  {
    path: routes.states,
    element: <LazyLoad component={States} />,
    route: Route,
  },
  {
    path: routes.testimonials,
    element: <LazyLoad component={Testimonials} />,
    route: Route,
  },
  {
    path: routes.clipboard,
    element: <LazyLoad component={ClipBoard} />,
    route: Route,
  },
  {
    path: routes.counter,
    element: <LazyLoad component={Counter} />,
    route: Route,
  },
  {
    path: routes.rating,
    element: <LazyLoad component={Rating} />,
    route: Route,
  },
  {
    path: routes.stickyNotes,
    element: <LazyLoad component={Stickynote} />,
    route: Route,
  },
  {
    path: routes.textEditor,
    element: <LazyLoad component={TextEditor} />,
    route: Route,
  },
  {
    path: routes.timeLine,
    element: <LazyLoad component={Timeline} />,
    route: Route,
  },
  {
    path: routes.scrollBar,
    element: <LazyLoad component={Scrollbar} />,
    route: Route,
  },
  {
    path: routes.apexChat,
    element: <LazyLoad component={Apexchart} />,
    route: Route,
  },
  {
    path: routes.fantawesome,
    element: <LazyLoad component={FontawesomeIcons} />,
    route: Route,
  },
  {
    path: routes.flagIcons,
    element: <LazyLoad component={FlagIcons} />,
    route: Route,
  },
  {
    path: routes.materialIcon,
    element: <LazyLoad component={MaterialIcons} />,
    route: Route,
  },
  {
    path: routes.pe7icon,
    element: <LazyLoad component={PE7Icons} />,
    route: Route,
  },
  {
    path: routes.themifyIcon,
    element: <LazyLoad component={ThemifyIcons} />,
    route: Route,
  },
  {
    path: routes.typicon,
    element: <LazyLoad component={TypiconIcons} />,
    route: Route,
  },
  {
    path: routes.basicInput,
    element: <LazyLoad component={BasicInputs} />,
    route: Route,
  },
  {
    path: routes.weatherIcon,
    element: <LazyLoad component={WeatherIcons} />,
    route: Route,
  },
  {
    path: routes.checkboxandRadion,
    element: <LazyLoad component={CheckboxRadios} />,
    route: Route,
  },
  {
    path: routes.inputGroup,
    element: <LazyLoad component={InputGroup} />,
    route: Route,
  },
  {
    path: routes.gridandGutters,
    element: <LazyLoad component={GridGutters} />,
    route: Route,
  },
  {
    path: routes.formSelect,
    element: <LazyLoad component={FormSelect} />,
    route: Route,
  },
  {
    path: routes.formMask,
    element: <LazyLoad component={FormMask} />,
    route: Route,
  },
  {
    path: routes.fileUpload,
    element: <LazyLoad component={FileUpload} />,
    route: Route,
  },
  {
    path: routes.floatingLabel,
    element: <LazyLoad component={FloatingLabel} />,
    route: Route,
  },
  {
    path: routes.horizontalForm,
    element: <LazyLoad component={FormHorizontal} />,
    route: Route,
  },
  {
    path: routes.verticalForm,
    element: <LazyLoad component={FormVertical} />,
    route: Route,
  },
  {
    path: routes.formValidation,
    element: <LazyLoad component={FormValidation} />,
    route: Route,
  },
  {
    path: routes.reactSelect,
    element: <LazyLoad component={FormSelect2} />,
    route: Route,
  },
  {
    path: routes.formWizard,
    element: <LazyLoad component={FormWizard} />,
    route: Route,
  },
  {
    path: routes.dataTable,
    element: <LazyLoad component={DataTables} />,
    route: Route,
  },
  {
    path: routes.tableBasic,
    element: <LazyLoad component={TablesBasic} />,
    route: Route,
  },
  {
    path: routes.iconicIcon,
    element: <LazyLoad component={IonicIcons} />,
    route: Route,
  },
  {
    path: routes.placeholder,
    element: <LazyLoad component={Placeholder} />,
    route: Route,
  },
  {
    path: routes.sweetalert,
    element: <LazyLoad component={Alert} />,
    route: Route,
  },
  {
    path: routes.alert,
    element: <LazyLoad component={AlertUi} />,
    route: Route,
  },
  {
    path: routes.tooltip,
    element: <LazyLoad component={Tooltips} />,
    route: Route,
  },
  {
    path: routes.ribbon,
    element: <LazyLoad component={Ribbon} />,
    route: Route,
  },
  // Peoples Module
  {
    path: routes.studentGrid,
    element: <LazyLoad component={StudentGrid} />,
    route: Route,
  },
  {
    path: routes.studentList,
    element: <LazyLoad component={StudentList} />,
    route: Route,
  },
  {
    path: routes.addStudent,
    element: <LazyLoad component={AddStudent} />,
    route: Route,
  },
  {
    path: routes.editStudent,
    element: <LazyLoad component={AddStudent} />,
    route: Route,
  },
  {
    path: routes.studentLibrary,
    element: <LazyLoad component={StudentLibrary} />,
    route: Route,
  },
  {
    path: routes.studentDetail,
    element: <LazyLoad component={StudentDetails} />,
    route: Route,
  },
  {
    path: routes.studentFees,
    element: <LazyLoad component={StudentFees} />,
    route: Route,
  },
  {
    path: routes.studentLeaves,
    element: <LazyLoad component={StudentLeaves} />,
    route: Route,
  },
  {
    path: routes.studentResult,
    element: <LazyLoad component={StudentResult} />,
    route: Route,
  },
  {
    path: routes.studentTimeTable,
    element: <LazyLoad component={StudentTimeTable} />,
    route: Route,
  },
  {
    path: routes.studentPromotion,
    element: <LazyLoad component={StudentPromotion} />,
    route: Route,
  },
  {
    path: routes.AcademicReason,
    element: <LazyLoad component={AcademicReason} />,
    route: Route,
  },
  {
    path: routes.classSyllabus,
    element: <LazyLoad component={ClassSyllabus} />,
    route: Route,
  },
  {
    path: routes.classSubject,
    element: <LazyLoad component={ClassSubject} />,
    route: Route,
  },
  {
    path: routes.classSection,
    element: <LazyLoad component={ClassSection} />,
    route: Route,
  },
  {
    path: routes.classRoom,
    element: <LazyLoad component={ClassRoom} />,
    route: Route,
  },
  {
    path: routes.classRoutine,
    element: <LazyLoad component={ClassRoutine} />,
    route: Route,
  },
  {
    path: routes.sheduleClasses,
    element: <LazyLoad component={ScheduleClasses} />,
    route: Route,
  },
  {
    path: routes.exam,
    element: <LazyLoad component={Exam} />,
    route: Route,
  },
  {
    path: routes.examSchedule,
    element: <LazyLoad component={ExamSchedule} />,
    route: Route,
  },
  {
    path: routes.grade,
    element: <LazyLoad component={Grade} />,
    route: Route,
  },
  {
    path: routes.staff,
    element: <LazyLoad component={Staff} />,
    route: Route,
  },
  {
    path: routes.departments,
    element: <LazyLoad component={Departments} />,
    route: Route,
  },
  {
    path: routes.classes,
    element: <LazyLoad component={Classes} />,
    route: Route,
  },
  {
    path: routes.classHomeWork,
    element: <LazyLoad component={ClassHomeWork} />,
    route: Route,
  },
  {
    path: routes.examResult,
    element: <LazyLoad component={ExamResult} />,
    route: Route,
  },
  {
    path: routes.examAttendance,
    element: <LazyLoad component={ExamAttendance} />,
    route: Route,
  },
  {
    path: routes.teacherGrid,
    element: <LazyLoad component={TeacherGrid} />,
    route: Route,
  },
  {
    path: routes.teacherList,
    element: <LazyLoad component={TeacherList} />,
    route: Route,
  },
  {
    path: routes.addTeacher,
    element: <LazyLoad component={TeacherForm} />,
    route: Route,
  },
  {
    path: routes.editTeacher,
    element: <LazyLoad component={TeacherForm} />,
    route: Route,
  },
  {
    path: routes.teacherDetails,
    element: <LazyLoad component={TeacherDetails} />,
    route: Route,
  },
  {
    path: routes.teachersRoutine,
    element: <LazyLoad component={TeachersRoutine} />,
    route: Route,
  },
  {
    path: routes.teacherSalary,
    element: <LazyLoad component={TeacherSalary} />,
    route: Route,
  },
  {
    path: routes.teacherLeaves,
    element: <LazyLoad component={TeacherLeave} />,
    route: Route,
  },
  {
    path: routes.teacherLibrary,
    element: <LazyLoad component={TeacherLibrary} />,
    route: Route,
  },
  {
    path: routes.parentGrid,
    element: <LazyLoad component={ParentGrid} />,
    route: Route,
  },
  {
    path: routes.parentList,
    element: <LazyLoad component={ParentList} />,
    route: Route,
  },
  {
    path: routes.classTimetable,
    element: <LazyLoad component={ClassTimetable} />,
    route: Route,
  },
  {
    path: routes.payroll,
    element: <LazyLoad component={Payroll} />,
    route: Route,
  },
  {
    path: routes.holidays,
    element: <LazyLoad component={Holiday} />,
    route: Route,
  },
  {
    path: routes.designation,
    element: <LazyLoad component={Designation} />,
    route: Route,
  },
  {
    path: routes.listLeaves,
    element: <LazyLoad component={ListLeaves} />,
    route: Route,
  },
  {
    path: routes.staffDetails,
    element: <LazyLoad component={StaffDetails} />,
    route: Route,
  },
  {
    path: routes.staffPayroll,
    element: <LazyLoad component={StaffPayRoll} />,
    route: Route,
  },
  {
    path: routes.staffLeave,
    element: <LazyLoad component={StaffLeave} />,
    route: Route,
  },
  {
    path: routes.layoutDefault,
    element: <LazyLoad component={AdminDashboard} />,
    route: Route,
  },
  {
    path: routes.layoutMini,
    element: <LazyLoad component={AdminDashboard} />,
    route: Route,
  },
  {
    path: routes.layoutRtl,
    element: <LazyLoad component={AdminDashboard} />,
    route: Route,
  },
  {
    path: routes.layoutBox,
    element: <LazyLoad component={AdminDashboard} />,
    route: Route,
  },
  {
    path: routes.layoutDark,
    element: <LazyLoad component={AdminDashboard} />,
    route: Route,
  },
  {
    path: routes.guardiansGrid,
    element: <LazyLoad component={GuardianGrid} />,
    route: Route,
  },
  {
    path: routes.guardiansList,
    element: <LazyLoad component={GuardianList} />,
    route: Route,
  },
  {
    path: routes.feesGroup,
    element: <LazyLoad component={FeesGroup} />,
    route: Route,
  },
  {
    path: routes.feesType,
    element: <LazyLoad component={FeesTypes} />,
    route: Route,
  },
  {
    path: routes.feesMaster,
    element: <LazyLoad component={FeesMaster} />,
    route: Route,
  },
  {
    path: routes.feesAssign,
    element: <LazyLoad component={FeesAssign} />,
    route: Route,
  },
  {
    path: routes.collectFees,
    element: <LazyLoad component={CollectFees} />,
    route: Route,
  },
  {
    path: routes.libraryMembers,
    element: <LazyLoad component={LibraryMember} />,
    route: Route,
  },
  {
    path: routes.libraryBooks,
    element: <LazyLoad component={Books} />,
    route: Route,
  },
  {
    path: routes.libraryIssueBook,
    element: <LazyLoad component={IssueBook} />,
    route: Route,
  },
  {
    path: routes.libraryReturn,
    element: <LazyLoad component={ReturnBook} />,
    route: Route,
  },
  {
    path: routes.sportsList,
    element: <LazyLoad component={SportsList} />,
    route: Route,
  },
  {
    path: routes.playerList,
    element: <LazyLoad component={PlayersList} />,
    route: Route,
  },
  {
    path: routes.hostelRoom,
    element: <LazyLoad component={HostelRooms} />,
    route: Route,
  },
  {
    path: routes.hostelType,
    element: <LazyLoad component={HostelType} />,
    route: Route,
  },
  {
    path: routes.hostelList,
    element: <LazyLoad component={HostelList} />,
    route: Route,
  },
  {
    path: routes.transportRoutes,
    element: <LazyLoad component={TransportRoutes} />,
    route: Route,
  },
  {
    path: routes.transportAssignVehicle,
    element: <LazyLoad component={TransportAssignVehicle} />,
    route: Route,
  },
  {
    path: routes.transportPickupPoints,
    element: <LazyLoad component={TransportPickupPoints} />,
    route: Route,
  },
  {
    path: routes.transportVehicleDrivers,
    element: <LazyLoad component={TransportVehicleDrivers} />,
    route: Route,
  },
  {
    path: routes.transportVehicle,
    element: <LazyLoad component={TransportVehicle} />,
    route: Route,
  },
  {
    path: routes.approveRequest,
    element: <LazyLoad component={ApproveRequest} />,
    route: Route,
  },
  {
    path: routes.studentAttendance,
    element: <LazyLoad component={StudentAttendance} />,
    route: Route,
  },
  {
    path: routes.teacherAttendance,
    element: <LazyLoad component={TeacherAttendance} />,
    route: Route,
  },
  {
    path: routes.staffAttendance,
    element: <LazyLoad component={StaffAttendance} />,
    route: Route,
  },
  {
    path: routes.staffsAttendance,
    element: <LazyLoad component={StaffsAttendance} />,
    route: Route,
  },
  {
    path: routes.addStaff,
    element: <LazyLoad component={AddStaff} />,
    route: Route,
  },
  {
    path: routes.editStaff,
    element: <LazyLoad component={EditStaff} />,
    route: Route,
  },
  {
    path: routes.accountsIncome,
    element: <LazyLoad component={AccountsIncome} />,
    route: Route,
  },
  {
    path: routes.accountsInvoices,
    element: <LazyLoad component={AccountsInvoices} />,
    route: Route,
  },
  {
    path: routes.accountsTransactions,
    element: <LazyLoad component={AccountsTransactions} />,
    route: Route,
  },
  {
    path: routes.addInvoice,
    element: <LazyLoad component={AddInvoice} />,
    route: Route,
  },
  {
    path: routes.editInvoice,
    element: <LazyLoad component={EditInvoice} />,
    route: Route,
  },
  {
    path: routes.expense,
    element: <LazyLoad component={Expense} />,
    route: Route,
  },
  {
    path: routes.expenseCategory,
    element: <LazyLoad component={ExpensesCategory} />,
    route: Route,
  },
  {
    path: routes.invoice,
    element: <LazyLoad component={Invoice} />,
    route: Route,
  },
  {
    path: routes.events,
    element: <LazyLoad component={Events} />,
    route: Route,
  },
  {
    path: routes.noticeBoard,
    element: <LazyLoad component={NoticeBoard} />,
    route: Route,
  },
  // Settings
  {
    path: routes.profilesettings,
    element: <LazyLoad component={Profilesettings} />,
    route: Route,
  },
  {
    path: routes.securitysettings,
    element: <LazyLoad component={Securitysettings} />,
    route: Route,
  },
  {
    path: routes.notificationssettings,
    element: <LazyLoad component={Notificationssettings} />,
    route: Route,
  },
  {
    path: routes.companySettings,
    element: <LazyLoad component={CompanySettings} />,
    route: Route,
  },
  {
    path: routes.localization,
    element: <LazyLoad component={Localization} />,
    route: Route,
  },
  {
    path: routes.prefixes,
    element: <LazyLoad component={Prefixes} />,
    route: Route,
  },
  {
    path: routes.socialAuthentication,
    element: <LazyLoad component={Socialauthentication} />,
    route: Route,
  },
  {
    path: routes.language,
    element: <LazyLoad component={Languagesettings} />,
    route: Route,
  },
  {
    path: routes.invoiceSettings,
    element: <LazyLoad component={InvoiceSettings} />,
    route: Route,
  },
  {
    path: routes.emailSettings,
    element: <LazyLoad component={EmailSettings} />,
    route: Route,
  },
  {
    path: routes.emailTemplates,
    element: <LazyLoad component={Emailtemplates} />,
    route: Route,
  },
  {
    path: routes.smsSettings,
    element: <LazyLoad component={SmsSettings} />,
    route: Route,
  },
  {
    path: routes.optSettings,
    element: <LazyLoad component={OtpSettings} />,
    route: Route,
  },
  {
    path: routes.gdprCookies,
    element: <LazyLoad component={GdprCookies} />,
    route: Route,
  },
  {
    path: routes.paymentGateways,
    element: <LazyLoad component={PaymentGateways} />,
    route: Route,
  },
  {
    path: routes.taxRates,
    element: <LazyLoad component={TaxRates} />,
    route: Route,
  },
  {
    path: routes.schoolSettings,
    element: <LazyLoad component={SchoolSettings} />,
    route: Route,
  },
  {
    path: routes.religion,
    element: <LazyLoad component={Religion} />,
    route: Route,
  },
  {
    path: routes.storage,
    element: <LazyLoad component={Storage} />,
    route: Route,
  },
  {
    path: routes.rolesPermissions,
    element: <LazyLoad component={RolesPermissions} />,
    route: Route,
  },
  {
    path: routes.permissions,
    element: <LazyLoad component={Permission} />,
    route: Route,
  },
  {
    path: routes.manageusers,
    element: <LazyLoad component={Manageusers} />,
    route: Route,
  },
  {
    path: routes.allBlogs,
    element: <LazyLoad component={AllBlogs} />,
    route: Route,
  },
  {
    path: routes.blogCategories,
    element: <LazyLoad component={BlogCategories} />,
    route: Route,
  },
  {
    path: routes.blogComments,
    element: <LazyLoad component={BlogComments} />,
    route: Route,
  },
  {
    path: routes.blogTags,
    element: <LazyLoad component={BlogTags} />,
    route: Route,
  },
  {
    path: routes.tickets,
    element: <LazyLoad component={Tickets} />,
    route: Route,
  },
  {
    path: routes.ticketGrid,
    element: <LazyLoad component={TicketGrid} />,
    route: Route,
  },
  {
    path: routes.ticketDetails,
    element: <LazyLoad component={TicketDetails} />,
    route: Route,
  },
  {
    path: routes.feesReport,
    element: <LazyLoad component={FeesReport} />,
    route: Route,
  },
  {
    path: routes.leaveReport,
    element: <LazyLoad component={LeaveReport} />,
    route: Route,
  },
  {
    path: routes.gradeReport,
    element: <LazyLoad component={GradeReport} />,
    route: Route,
  },
  {
    path: routes.studentReport,
    element: <LazyLoad component={StudentReport} />,
    route: Route,
  },
  {
    path: routes.classReport,
    element: <LazyLoad component={ClassReport} />,
    route: Route,
  },
  {
    path: routes.attendanceReport,
    element: <LazyLoad component={AttendanceReport} />,
    route: Route,
  },
  {
    path: routes.studentAttendanceType,
    element: <LazyLoad component={StudentAttendanceType} />,
    route: Route,
  },
  {
    path: routes.dailyAttendance,
    element: <LazyLoad component={DailyAttendance} />,
    route: Route,
  },
  {
    path: routes.studentDayWise,
    element: <LazyLoad component={StudentDayWise} />,
    route: Route,
  },
  {
    path: routes.teacherDayWise,
    element: <LazyLoad component={TeacherDayWise} />,
    route: Route,
  },
  {
    path: routes.staffDayWise,
    element: <LazyLoad component={StaffDayWise} />,
    route: Route,
  },
  {
    path: routes.teacherReport,
    element: <LazyLoad component={TeacherReport} />,
    route: Route,
  },
  {
    path: routes.staffReport,
    element: <LazyLoad component={StaffReport} />,
    route: Route,
  },
  {
    path: routes.contactMessages,
    element: <LazyLoad component={ContactMessages} />,
    route: Route,
  },
  {
    path: routes.profile,
    element: <LazyLoad component={Profile} />,
    route: Route,
  },
  {
    path: routes.activity,
    element: <LazyLoad component={NotificationActivities} />,
    route: Route,
  },
];

export const authRoutes = [
  {
    path: routes.comingSoon,
    element: <LazyLoad component={ComingSoon} />,
    route: Route,
  },
  {
    path: routes.login,
    element: <LazyLoad component={Login} />,
    route: Route,
  },
  {
    path: routes.login2,
    element: <LazyLoad component={Login2} />,
    route: Route,
  },
  {
    path: routes.login3,
    element: <LazyLoad component={Login3} />,
    route: Route,
  },
  {
    path: routes.register,
    element: <LazyLoad component={Register} />,
    route: Route,
  },
  {
    path: routes.twoStepVerification,
    element: <LazyLoad component={TwoStepVerification} />,
    route: Route,
  },
  {
    path: routes.twoStepVerification2,
    element: <LazyLoad component={TwoStepVerification2} />,
    route: Route,
  },
  {
    path: routes.twoStepVerification3,
    element: <LazyLoad component={TwoStepVerification3} />,
    route: Route,
  },
  {
    path: routes.emailVerification,
    element: <LazyLoad component={EmailVerification} />,
    route: Route,
  },
  {
    path: routes.emailVerification2,
    element: <LazyLoad component={EmailVerification2} />,
    route: Route,
  },
  {
    path: routes.emailVerification3,
    element: <LazyLoad component={EmailVerification3} />,
    route: Route,
  },
  {
    path: routes.register2,
    element: <LazyLoad component={Register2} />,
    route: Route,
  },
  {
    path: routes.register3,
    element: <LazyLoad component={Register3} />,
    route: Route,
  },
  {
    path: routes.resetPassword,
    element: <LazyLoad component={ResetPassword} />,
    route: Route,
  },
  {
    path: routes.resetPassword2,
    element: <LazyLoad component={ResetPassword2} />,
    route: Route,
  },
  {
    path: routes.resetPassword3,
    element: <LazyLoad component={ResetPassword3} />,
    route: Route,
  },
  {
    path: routes.forgotPassword,
    element: <LazyLoad component={ForgotPassword} />,
    route: Route,
  },
  {
    path: routes.forgotPassword2,
    element: <LazyLoad component={ForgotPassword2} />,
    route: Route,
  },
  {
    path: routes.forgotPassword3,
    element: <LazyLoad component={ForgotPassword3} />,
    route: Route,
  },
  {
    path: routes.error404,
    element: <LazyLoad component={Error404} />,
    route: Route,
  },
  {
    path: routes.error500,
    element: <LazyLoad component={Error500} />,
    route: Route,
  },
  {
    path: routes.underMaintenance,
    element: <LazyLoad component={UnderMaintenance} />,
    route: Route,
  },
  {
    path: routes.lockScreen,
    element: <LazyLoad component={LockScreen} />,
  },
  {
    path: routes.resetPasswordSuccess,
    element: <LazyLoad component={ResetPasswordSuccess} />,
  },
  {
    path: routes.resetPasswordSuccess2,
    element: <LazyLoad component={ResetPasswordSuccess2} />,
  },
  {
    path: routes.resetPasswordSuccess3,
    element: <LazyLoad component={ResetPasswordSuccess3} />,
  },
];
