
import hin from './hin';
import gu from './gu';
import ta from './ta';
import te from './te';
import mr from './mr';
import kn from './kn';

export default{
    mixins:[hin,ta,te,gu,kn,mr],
    methods:{
        getLanguageText(key) {
            // Map of language translations based on language code
            const translations = {
                en: {
                    'Select preferred travel date': 'Select preferred travel date',
                    'Your travel date is' : 'Your travel date is',
                    'Passport Upload': 'Passport Upload',
                    'Passport Front' : 'Passport Front',
                    'Passport Back' : 'Passport Back',
                    'Form Note' : 'Use this section only if you have merged passport image or pdf !',
                    'Merged Passport' : 'Merged Passport',
                    'Home Town':'Home Town',
                    'Date Of Birth':'Date Of Birth',
                    'Relation':'Relation',
                    'Gender':'Gender',
                    'Self Paid Member':'Self Paid Member',
                    'E-mail':'E-mail',
                    'Phone':'Phone',
                    'Name':'Name',
                    'Add Members':'Add Members',
                    'Select':'Select',
                    'First Name':'First Name',
                    'Last Name':'Last Name',
                    'Passport Number':'Passport Number',
                    'Issue Place':'Issue Place',
                    'Exp. Date':'Exp. Date',
                    'Member Last Name':'Member Last Name',
                    'Id Number':'Id Number',
                    'Passport Details':'Passport Details',
                    'Id Type':'Id Type',
                    'Member First Name':'Member First Name',
                    'Photo ID':'Photo ID',
                    'Marriage Anniversary':'Marriage Anniversary',
                    'Food Prefrences':'Food Prefrences',
                    'Document Upload':'Document Upload',
                    'Other Detail' : 'Other Detail'










                    // Add more translations...
                },
                kn: {
                    'Select preferred travel date':this.kn.Selectpreferredtraveldate,
                    'Your travel date is': this.kn.Yourtraveldateis,
                    'Passport Upload': this.kn.PassportUpload,
                    'Passport Front' : this.kn.PassportFront,
                    'Passport Back' : this.kn.PassportBack,
                    'Form Note' : this.kn.formNote,
                    'Merged Passport' : this.kn.MergedPassport,
                    'Home Town':this.kn.HomeTown,
                    'Date Of Birth':this.kn.DateOfBirth,
                    'Relation':this.kn.Relation,
                    'Gender':this.kn.Gender,
                    'Self Paid Member':this.kn.SelfPaidMember,
                    'E-mail':this.kn.Email,
                    'Phone':this.kn.Phone,
                    'Name':this.kn.name,
                    'Select':this.kn.Select,
                    'Add Members':this.kn.AddMembers,
                    'First Name':this.kn.FirstName,
                    'Last Name':this.kn.LastName,
                    'Passport Number':this.kn.PassportNumber,
                    'Issue Place':this.kn.IssuePlace,
                    'Exp. Date':this.kn.ExpDate,
                    'Member Last Name':this.kn.MemberLastName,
                    'Id Number':this.kn.IdNumber,
                    'Passport Details':this.kn.PassportDetails,
                    'Id Type':this.kn.IdType,
                    'Member First Name':this.kn.MemberFirstName,
                    'Photo ID':this.kn.PhotoID,
                    'Marriage Anniversary':this.kn.MarriageAnniversary,
                    'Food Prefrences':this.kn.FoodPrefrences,
                    'Document Upload':this.kn.DocumentUpload,
                    'Other Detail' : this.kn.OtherDetails

                    // Add more translations...
                },
                hi: {
                    'Select preferred travel date':this.hin.Selectpreferredtraveldate,
                    'Your travel date is': this.hin.Yourtraveldateis,
                    'Passport Upload': this.hin.PassportUpload,
                    'Passport Front' : this.hin.PassportFront,
                    'Passport Back' : this.hin.PassportBack,
                    'Form Note' : this.hin.formNote,
                    'Merged Passport' : this.hin.MergedPassport,
                    'Home Town':this.hin.HomeTown,
                    'Date Of Birth':this.hin.DateOfBirth,
                    'Relation':this.hin.Relation,
                    'Gender':this.hin.Gender,
                    'Self Paid Member':this.hin.SelfPaidMember,
                    'E-mail':this.hin.Email,
                    'Phone':this.hin.Phone,
                    'Name':this.hin.name,
                    'Select':this.hin.Select,
                    'Add Members':this.hin.AddMembers,
                    'First Name':this.hin.FirstName,
                    'Last Name':this.hin.LastName,
                    'Passport Number':this.hin.PassportNumber,
                    'Issue Place':this.hin.IssuePlace,
                    'Exp. Date':this.hin.ExpDate,
                    'Member Last Name':this.hin.MemberLastName,
                    'Id Number':this.hin.IdNumber,
                    'Passport Details':this.hin.PassportDetails,
                    'Id Type':this.hin.IdType,
                    'Member First Name':this.hin.MemberFirstName,
                    'Photo ID':this.hin.PhotoID,
                    'Marriage Anniversary':this.hin.MarriageAnniversary,
                    'Food Prefrences':this.hin.FoodPrefrences,
                    'Document Upload':this.hin.DocumentUpload,
                    'Other Detail' : this.hin.OtherDetails

                    // Add more translations...
                },
                ta: {

                    'Select preferred travel date': this.ta.Selectpreferredtraveldate,
                    'Your travel date is': this.ta.Yourtraveldateis,
                    'Passport Upload': this.ta.PassportUpload,
                    'Passport Front' : this.ta.PassportFront,
                    'Passport Back' : this.ta.PassportBack,
                    'Form Note' : this.ta.formNote,
                    'Merged Passport' : this.ta.MergedPassport,
                    'Home Town':this.ta.HomeTown,
                    'Date Of Birth':this.ta.DateOfBirth,
                    'Relation':this.ta.Relation,
                    'Gender':this.ta.Gender,
                    'Self Paid Member':this.ta.SelfPaidMember,
                    'E-mail':this.ta.Email,
                    'Phone':this.ta.Phone,
                    'Name':this.ta.name,
                    'Select':this.ta.Select,
                    'Add Members':this.ta.AddMembers,
                    'First Name':this.ta.FirstName,
                    'Last Name':this.ta.LastName,
                    'Passport Number':this.ta.PassportNumber,
                    'Issue Place':this.ta.IssuePlace,
                    'Exp. Date':this.ta.ExpDate,
                    'Member Last Name':this.ta.MemberLastName,
                    'Id Number':this.ta.IdNumber,
                    'Passport Details':this.ta.PassportDetails,
                    'Id Type':this.ta.IdType,
                    'Member First Name':this.ta.MemberFirstName,
                    'Photo ID':this.ta.PhotoID,
                    'Marriage Anniversary':this.ta.MarriageAnniversary,
                    'Food Prefrences':this.ta.FoodPrefrences,
                    'Document Upload':this.ta.DocumentUpload,
                    'Other Detail' : this.ta.OtherDetails

                    // Add more translations...
                },
                te: {
                    'Select preferred travel date':this.te.Selectpreferredtraveldate,
                    'Your travel date is': this.te.Yourtraveldateis,
                    'Passport Upload': this.te.PassportUpload,
                    'Passport Front' : this.te.PassportFront,
                    'Passport Back' : this.te.PassportBack,
                    'Form Note' : this.te.formNote,
                    'Merged Passport' : this.te.MergedPassport,
                    'Home Town':this.te.HomeTown,
                    'Date Of Birth':this.te.DateOfBirth,
                    'Relation':this.te.Relation,
                    'Gender':this.te.Gender,
                    'Self Paid Member':this.te.SelfPaidMember,
                    'E-mail':this.te.Email,
                    'Phone':this.te.Phone,
                    'Name':this.te.name,
                    'Add Members':this.te.AddMembers,
                    'Select':this.te.Select,
                    'First Name':this.te.FirstName,
                    'Last Name':this.te.LastName,
                    'Passport Number':this.te.PassportNumber,
                    'Issue Place':this.te.IssuePlace,
                    'Exp. Date':this.te.ExpDate,
                    'Member Last Name':this.te.MemberLastName,
                    'Id Number':this.te.IdNumber,
                    'Passport Details':this.te.PassportDetails,
                    'Id Type':this.te.IdType,
                    'Member First Name':this.te.MemberFirstName,
                    'Photo ID':this.te.PhotoID,
                    'Marriage Anniversary':this.te.MarriageAnniversary,
                    'Food Prefrences':this.te.FoodPrefrences,
                    'Document Upload':this.te.DocumentUpload,
                    'Other Detail' : this.te.OtherDetails
                    // Add more translations...
                },
                gu: {
                    'Select preferred travel date': this.gu.Selectpreferredtraveldate,
                    'Your travel date is': this.gu.Yourtraveldateis,
                    'Passport Upload': this.gu.PassportUpload,
                    'Passport Front' : this.gu.PassportFront,
                    'Form Note' : this.gu.formNote,
                    'Merged Passport' : this.gu.MergedPassport,
                    'Home Town':this.gu.HomeTown,
                    'Date Of Birth':this.gu.DateOfBirth,
                    'Relation':this.gu.Relation,
                    'Gender':this.gu.Gender,
                    'Self Paid Member':this.gu.SelfPaidMember,
                    'E-mail':this.gu.Email,
                    'Phone':this.gu.Phone,
                    'Name':this.gu.name,
                    'Add Members':this.gu.AddMembers,
                    'Select':this.gu.Select,
                    'First Name':this.gu.FirstName,
                    'Last Name':this.gu.LastName,
                    'Passport Number':this.gu.PassportNumber,
                    'Issue Place':this.gu.IssuePlace,
                    'Exp. Date':this.gu.ExpDate,
                    'Member Last Name':this.gu.MemberLastName,
                    'Id Number':this.gu.IdNumber,
                    'Passport Details':this.gu.PassportDetails,
                    'Id Type':this.gu.IdType,
                    'Member First Name':this.gu.MemberFirstName,
                    'Photo ID':this.gu.PhotoID,
                    'Marriage Anniversary':this.gu.MarriageAnniversary,
                    'Food Prefrences':this.gu.FoodPrefrences,
                    'Document Upload':this.gu.DocumentUpload,
                    'Other Detail' : this.gu.OtherDetails
                    // Add more translations...
                },
                mr: {
                    'Select preferred travel date': this.mr.Selectpreferredtraveldate,
                    'Your travel date is': this.mr.Yourtraveldateis,
                    'Passport Upload': this.mr.PassportUpload,
                    'Passport Front' : this.mr.PassportFront,
                    'Passport Back' : this.mr.PassportBack,
                    'Form Note' : this.mr.formNote,
                    'Merged Passport' : this.mr.MergedPassport,
                    'Home Town':this.mr.HomeTown,
                    'Date Of Birth':this.mr.DateOfBirth,
                    'Relation':this.mr.Relation,
                    'Gender':this.mr.Gender,
                    'Self Paid Member':this.mr.SelfPaidMember,
                    'E-mail':this.mr.Email,
                    'Phone':this.mr.Phone,
                    'Name':this.mr.name,
                    'Add Members':this.mr.AddMembers,
                    'Select':this.mr.Select,
                    'First Name':this.mr.FirstName,
                    'Last Name':this.mr.LastName,
                    'Passport Number':this.mr.PassportNumber,

                    'Issue Place':this.mr.IssuePlace,
                    'Exp. Date':this.mr.ExpDate,
                    'Member Last Name':this.mr.MemberLastName,
                    'Id Number':this.mr.IdNumber,
                    'Passport Details':this.mr.PassportDetails,
                    'Id Type':this.mr.IdType,
                    'Member First Name':this.mr.MemberFirstName,
                    'Photo ID':this.mr.PhotoID,
                    'Marriage Anniversary':this.mr.MarriageAnniversary,
                    'Food Prefrences':this.mr.FoodPrefrences,
                    'Document Upload':this.mr.DocumentUpload,
                    'Other Detail' : this.mr.OtherDetails

                    // Add more translations...
                },
            };

            const langCode = this.SelectedLangForForm.code;
            if (translations[langCode] && translations[langCode][key]) {
                return translations[langCode][key];
            }
            return key; // Return the default key if translation is not available
        },

    }
}
