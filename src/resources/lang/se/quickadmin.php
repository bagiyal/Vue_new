<?php

return [
		'user-management' => [		'title' => 'User management',		'fields' => [		],	],
		'permissions' => [		'title' => 'Permissions',		'fields' => [			'title' => 'Title',		],	],
		'roles' => [		'title' => 'Roles',		'fields' => [			'title' => 'Title',			'permission' => 'Permissions',		],	],
		'users' => [		'title' => 'Users',		'fields' => [			'name' => 'Name',			'email' => 'Email',			'password' => 'Password',			'role' => 'Role',			'remember-token' => 'Remember token',			'approved' => 'Approved',			'team' => 'Team',			'account-manager' => 'Account manager',			'agree' => 'Agree',			'banner-color' => 'Banner color',			'address' => 'Address',			'city' => 'City',			'state' => 'State',			'country' => 'Country',			'phone' => 'Phone',			'postcode' => 'Postcode',			'company' => 'Company',			'device' => 'Device',			'locale' => 'Locale',			'login' => 'Login',			'login-date-time' => 'Login date time',			'login-status' => 'Login status',			'logo' => 'Logo',			'mycred-default' => 'Mycred default',			'mycred-default-total' => 'Mycred default total',			'mycred-epp-mycred' => 'Mycred epp mycred',			'owners-email' => 'Owners email',		],	],
		'place' => [		'title' => 'Place',		'fields' => [		],	],
		'state' => [		'title' => 'State',		'fields' => [			'title' => 'Title',			'description' => 'Description',			'latitude' => 'Latitude',			'longitude' => 'longitude',			'featured-image' => 'Featured image',			'country' => 'Country',		],	],
		'country' => [		'title' => 'Country',		'fields' => [			'title' => 'Title',			'description' => 'Description',			'featured-image' => 'Featured image',			'latitude' => 'Latitude',			'longitude' => 'Longitude',			'currency' => 'Currency',			'shortcode' => 'Shortcode',		],	],
		'city' => [		'title' => 'City',		'fields' => [			'title' => 'Title',			'description' => 'Description',			'latitude' => 'Latitude',			'longitude' => 'Longitude',			'featured-image' => 'Featured image',			'state' => 'State',		],	],
		'accommodation' => [		'title' => 'Accommodation',		'fields' => [			'title' => 'Title',			'description' => 'Description',			'contact-no' => 'Contact no',			'accommodation-address' => 'Accommodation address',			'featured-image' => 'Featured image',			'website-address' => 'Website address',			'check-in-time' => 'Check in time',			'check-out-time' => 'Check out time',			'latitude' => 'Latitude',			'longitude' => 'Longitude',			'city' => 'City',		],	],
		'user-actions' => [		'title' => 'User actions',		'created_at' => 'Time',		'fields' => [			'user' => 'User',			'action' => 'Action',			'action-model' => 'Action model',			'action-id' => 'Action id',		],	],
		'teams' => [		'title' => 'Teams',		'fields' => [			'name' => 'Name',		],	],
		'assets-management' => [		'title' => 'Assets management',		'fields' => [		],	],
		'assets-categories' => [		'title' => 'Categories',		'fields' => [		],	],
		'assets-statuses' => [		'title' => 'Statuses',		'fields' => [		],	],
		'assets-locations' => [		'title' => 'Locations',		'fields' => [		],	],
		'assets' => [		'title' => 'Assets',		'fields' => [		],	],
		'assets-history' => [		'title' => 'Assets history',		'created_at' => 'Time',		'fields' => [		],	],
		'basic-crm' => [		'title' => 'Basic CRM',		'fields' => [		],	],
		'crm-statuses' => [		'title' => 'Statuses',		'fields' => [			'title' => 'Title',		],	],
		'crm-customers' => [		'title' => 'Customers',		'fields' => [			'first-name' => 'First name',			'last-name' => 'Last name',			'crm-status' => 'Status',			'email' => 'Email',			'phone' => 'Phone',			'address' => 'Address',			'skype' => 'Skype',			'website' => 'Website',			'description' => 'Description',		],	],
		'crm-notes' => [		'title' => 'Notes',		'fields' => [			'customer' => 'Customer',			'note' => 'Notes',		],	],
		'crm-documents' => [		'title' => 'Documents',		'fields' => [			'customer' => 'Customer',			'name' => 'Title',			'description' => 'Description',			'file' => 'File',		],	],
		'faq-management' => [		'title' => 'FAQ Management',		'fields' => [		],	],
		'faq-categories' => [		'title' => 'Categories',		'fields' => [			'title' => 'Category',		],	],
		'faq-questions' => [		'title' => 'Questions',		'fields' => [			'category' => 'Category',			'question-text' => 'Question',			'answer-text' => 'Answer',		],	],
		'exhibitors' => [		'title' => 'Exhibitors',		'fields' => [			'name' => 'Name',			'description' => 'Description',			'contact' => 'Contact',			'address' => 'Address',			'website' => 'Website',			'category' => 'Category',			'logo' => 'Logo',			'history' => 'History',			'device-id' => 'Device id',			'created-by' => 'Created by',			'created-by-team' => 'Created by Team',		],	],
		'field-operator' => [		'title' => 'Field operator',		'fields' => [			'name' => 'Name',			'phone' => 'Phone',			'rating' => 'Rating',			'date-of-birth' => 'Date of birth',			'drivers-license-number' => 'Drivers license number',			'drivers-license-state' => 'Drivers license state',			'drivers-license-expiration-date' => 'Drivers license expiration date',			'relationdeviceid' => 'Relationdeviceid',			'ref-role' => 'Ref role',			'created-by' => 'Created by',			'created-by-team' => 'Created by Team',		],	],
		'rooms' => [		'title' => 'Rooms',		'fields' => [			'room-type-and-size' => 'Room type and size',			'bed-size' => 'Bed size',			'featured-image' => 'Featured image',			'max-count' => 'Max count',			'created-by' => 'Created by',			'created-by-team' => 'Created by Team',		],	],
		'query' => [		'title' => 'Query',		'fields' => [			'driver-pickup-date-time' => 'Driver pickup date time',			'booking-id' => 'Booking id',			'budget' => 'Budget',			'traveler-name' => 'Traveler name',			'bill-pay' => 'Bill pay',			'no-of-adults' => 'No of adults',			'no-of-children' => 'No of children',			'note' => 'Note',			'status' => 'Status',			'phone' => 'Phone',			'email' => 'Email',			'email-second' => 'Email second',			'traveller-id' => 'Traveller id',			'generated-itinerary' => 'Generated itinerary',			'itinerary-places' => 'Itinerary places',			'agency-id' => 'Agency id',			'agent-id' => 'Agent id',			'meal-day' => 'Meal day',			'meals-supplement' => 'Meals supplement',			'messageidd' => 'Messageidd',			'package-category' => 'Package category',			'pickup-address' => 'Pickup address',			'pickup-location' => 'Pickup location',			'query-feel' => 'Query feel',			'remarks' => 'Remarks',			'score' => 'Score',			'score-new' => 'Score new',			'total-room' => 'Total room',			'total-tour-days' => 'Total tour days',			'tour-cost' => 'Tour cost',			'tour-cost-tax' => 'Tour cost tax',			'tour-id' => 'Tour id',			'tour-name' => 'Tour name',			'tour-location' => 'Tour location',			'created-by' => 'Created by',			'created-by-team' => 'Created by Team',		],	],
		'leads' => [		'title' => 'Leads',		'fields' => [			'lead-id' => 'Lead id',			'lead-status' => 'Lead status',			'package-type' => 'Package type',			'date' => 'Date',			'email' => 'Email',			'phone' => 'Phone',			'name' => 'Name',			'adult-guest' => 'Adult guest',			'score' => 'Score',			'kids-guests' => 'Kids guests',			'agent-id' => 'Agent id',			'agency-id' => 'Agency id',			'score-new' => 'Score new',			'lead-feel' => 'Lead feel',			'created-by' => 'Created by',			'created-by-team' => 'Created by Team',			'remark' => 'Remark',			'source' => 'Source',			'infant-guest' => 'Infant guest',		],	],
		'field-roals' => [		'title' => 'Field roles',		'fields' => [		],	],
		'driver' => [		'title' => 'Driver',		'fields' => [		],	],
		'tour-manager' => [		'title' => 'Tour manager',		'fields' => [		],	],
		'guide' => [		'title' => 'Guide',		'fields' => [		],	],
		'activities-handler' => [		'title' => 'Activities handler',		'fields' => [		],	],
		'drivers' => [		'title' => 'Drivers',		'fields' => [			'name' => 'Name',			'phone' => 'Phone',			'rating' => 'Rating',			'date-of-birth' => 'Date of birth',			'drivers-license-number' => 'Drivers license number',			'drivers-license-state' => 'Drivers license state',			'drivers-license-expiration-date' => 'Drivers license expiration date',			'relationdeviceid' => 'Relationdeviceid',			'created-by' => 'Created by',			'created-by-team' => 'Created by Team',		],	],
		'booking' => [		'title' => 'Booking',		'fields' => [			'booking-id' => 'Booking id',			'full-name' => 'Full name',			'email' => 'Email',			'email2' => 'Email2',			'phone' => 'Phone',			'activated' => 'Activated',			'score' => 'Score',			'no-of-adults' => 'No of adults',			'no-of-children' => 'No of children',			'agency-id' => 'Agency id',			'agent-id' => 'Agent id',			'meal-day' => 'Meal day',			'bill-pay' => 'Bill pay',			'budget' => 'Budget',			'driver-pick-up-time' => 'Driver pick up time',			'driver-pick-up-time-updated' => 'Driver pick up time updated',			'drop-address' => 'Drop address',			'handler-name' => 'Handler name',			'handler-no' => 'Handler no',			'meals-supplement' => 'Meals supplement',			'member-of-iti' => 'Member of iti',			'package-category' => 'Package category',			'pickup-address' => 'Pickup address',			'total-price' => 'Total price',			'pickup-location' => 'Pickup location',			'tour-cost' => 'Tour cost',			'selected-car' => 'Selected car',			'status' => 'Status',			'supplier-id' => 'Supplier id',			'total-room' => 'Total room',			'total-tour-days' => 'Total tour days',			'traveller-id' => 'Traveller id',			'itinerary-places' => 'Itinerary places',			'itinerary-places-time' => 'Itinerary places time',			'tour-id' => 'Tour id',			'tour-name' => 'Tour name',			'tour-location' => 'Tour location',			'created-by' => 'Created by',			'created-by-team' => 'Created by Team',		],	],
		'group' => [		'title' => 'Group',		'fields' => [			'booking-id' => 'Booking id',			'full-name' => 'Full name',			'email' => 'Email',			'phone' => 'Phone',			'activated' => 'Activated',			'no-of-adults' => 'No of adults',			'no-of-children' => 'No of children',			'agency-id' => 'Agency id',			'agent-id' => 'Agent id',			'meal-day' => 'Meal day',			'bill-pay' => 'Bill pay',			'driver-pick-up-time' => 'Driver pick up time',			'driver-pick-up-time-updated' => 'Driver pick up time updated',			'drop-address' => 'Drop address',			'handler-name' => 'Handler name',			'handler-no' => 'Handler no',			'meals-supplement' => 'Meals supplement',			'package-category' => 'Package category',			'pickup-address' => 'Pickup address',			'pickup-location' => 'Pickup location',			'total-price' => 'Total price',			'tour-cost' => 'Tour cost',			'selected-car' => 'Selected car',			'status' => 'Status',			'supplier-id' => 'Supplier id',			'total-room' => 'Total room',			'total-tour-days' => 'Total tour days',			'traveller-id' => 'Traveller id',			'tour-id' => 'Tour id',			'itinerary-places' => 'Itinerary places',			'itinerary-places-time' => 'Itinerary places time',			'group' => 'Group',			'group-name' => 'Group name',			'group-id' => 'Group id',			'group-logo' => 'Group logo',			'group-place' => 'Group place',			'members' => 'Members',			'tour-cost-tax' => 'Tour cost tax',			'tour-handler' => 'Tour handler',			'tour-name' => 'Tour name',			'tour-location' => 'Tour location',			'created-by' => 'Created by',			'created-by-team' => 'Created by Team',		],	],
		'tour' => [		'title' => 'Tour',		'fields' => [			'title' => 'Title',			'locations' => 'Locations',			'total-tour-days' => 'Total tour days',			'created-by' => 'Created by',			'created-by-team' => 'Created by Team',		],	],
		'driver-role' => [		'title' => 'Driver role',		'fields' => [		],	],
		'tour-manager' => [		'title' => 'Driver role',		'fields' => [		],	],
		'driver-role' => [		'title' => 'Driver_role',		'fields' => [		],	],
		'driver-role' => [		'title' => 'Driver Role',		'fields' => [		],	],
		'driver-role' => [		'title' => 'Driver role',		'fields' => [		],	],
		'placesall' => [		'title' => 'Placesall',		'fields' => [		],	],
		'place' => [		'title' => 'Place',		'fields' => [			'title' => 'Title',			'description' => 'Description',			'contact-no' => 'Contact no',			'timing' => 'Timing',			'closed-day' => 'Closed day',			'time-required-to-visit' => 'Time required to visit',			'categories' => 'Categories',			'esb-visiblity' => 'Esb visiblity',			'address' => 'Address',			'place-longitude' => 'Place longitude',			'place-latitude' => 'Place latitude',			'city' => 'City',			'featured-image' => 'Featured image',			'gallery' => 'Gallery',			'cuisine' => 'Cuisine',			'recommended' => 'Recommended',			'partner' => 'Partner',			'place-tripadvisor-id' => 'Place tripadvisor id',			'city-id' => 'City id',			'created-by' => 'Created by',			'created-by-team' => 'Created by Team',		],	],
		'customer' => [		'title' => 'Customer',		'fields' => [			'name' => 'Name',			'email' => 'Email',			'account-manager' => 'Account manager',			'agree' => 'Agree',			'address' => 'Address',			'city' => 'City',			'state' => 'State',			'country' => 'Country',			'phone' => 'Phone',			'postcode' => 'Postcode',			'device' => 'Device',			'locale' => 'Locale',			'login' => 'Login',			'login-date-time' => 'Login date time',			'login-status' => 'Login status',			'mycred-default' => 'Mycred default',			'mycred-default-total' => 'Mycred default total',			'mycred-epp-mycred' => 'Mycred epp mycred',			'profile' => 'Profile',			'facebook' => 'Facebook',			'google' => 'Google',			'otp' => 'Otp',			'registered-thru' => 'Registered thru',		],	],
		'userr' => [		'title' => 'Userr',		'fields' => [			'name' => 'Name',			'email' => 'Email',			'password' => 'Password',			'role' => 'Role',			'remember-token' => 'Remember token',			'approved' => 'Approved',			'team' => 'Team',			'account-manager' => 'Account manager',			'agree' => 'Agree',			'banner-color' => 'Banner color',			'address' => 'Address',			'city' => 'City',			'state' => 'State',			'country' => 'Country',			'phone' => 'Phone',			'postcode' => 'Postcode',			'company' => 'Company',			'device' => 'Device',			'locale' => 'Locale',			'login' => 'Login',			'login-date-time' => 'Login date time',			'login-status' => 'Login status',			'logo' => 'Logo',			'mycred-default' => 'Mycred default',			'mycred-default-total' => 'Mycred default total',			'mycred-epp-mycred' => 'Mycred epp mycred',			'owners-email' => 'Owners email',		],	],
		'travellers' => [		'title' => 'Travellers',		'fields' => [			'name' => 'Name',			'email' => 'Email',			'display-name' => 'Display name',			'phone' => 'Phone',			'address' => 'Address',			'fcm-token' => 'Fcm token',			'device' => 'Device',			'auth-key' => 'Auth key',			'otp' => 'Otp',		],	],
		'task' => [		'title' => 'Task',		'fields' => [			'agency-id' => 'Agency id',			'agent-id' => 'Agent id',			'agent-name' => 'Agent name',			'assign-date' => 'Assign date',			'due-date' => 'Due date',			'ref-id' => 'Ref id',			'reminder' => 'Reminder',			'reminder-time' => 'Reminder time',			'remark' => 'Remark',			'status' => 'Status',		],	],
	'qa_create' => 'Skapa',
	'qa_save' => 'Spara',
	'qa_edit' => 'Redigera',
	'qa_restore' => 'Återställ',
	'qa_permadel' => 'Radera permanent',
	'qa_all' => 'Alla',
	'qa_trash' => 'Släng',
	'qa_view' => 'Visa',
	'qa_update' => 'Uppdatera',
	'qa_list' => 'Lista',
	'qa_no_entries_in_table' => 'Tabellen är tom.',
	'qa_custom_controller_index' => 'Egendefinierat kontrollindex.',
	'qa_logout' => 'Logga ut',
	'qa_add_new' => 'Lägg till ny',
	'qa_are_you_sure' => 'Är du säker?',
	'qa_back_to_list' => 'Tillbaka till listan',
	'qa_dashboard' => 'Dashboard',
	'qa_delete' => 'Radera',
	'qa_delete_selected' => 'Radera valda',
	'qa_category' => 'Kategori',
	'qa_categories' => 'Kategorier',
	'qa_sample_category' => 'Exempel kategori',
	'qa_questions' => 'Frågor',
	'qa_question' => 'Fråga',
	'qa_answer' => 'Svar',
	'qa_sample_question' => 'Exempel fråga',
	'qa_project_statuses' => 'Projektstatus',
	'qa_transactions' => 'Transaktioner',
	'qa_transaction_types' => 'Transaktionstyper',
	'qa_transaction_type' => 'Transaktionstyp',
	'qa_transaction_date' => 'Transaktionsdatum',
	'qa_currency' => 'Valuta',
	'qa_current_password' => 'Nuvarande lösenord',
	'qa_new_password' => 'Nytt lösenord',
	'qa_password_confirm' => 'Nytt lösenordsbekräftelse',
	'qa_dashboard_text' => 'Du är inloggad!',
	'qa_forgot_password' => 'Glömt ditt lösenord?',
	'qa_remember_me' => 'Kom ihåg mig',
	'qa_login' => 'Login',
	'qa_change_password' => 'Ändra lösenord',
	'qa_csv' => 'CSV',
	'qa_print' => 'Skriv ut',
	'qa_excel' => 'Excel',
	'qa_copy' => 'Kopiera',
	'qa_colvis' => 'Kolumn synlighet',
	'qa_pdf' => 'PDF',
	'qa_reset_password' => 'Uppdatera lösenord',
	'qa_reset_password_woops' => '<strong>Hoppsan!</strong> Det blev problem med  inmatning:',
	'qa_email_line1' => 'Du får detta email eftersom du glömt lösenordet för ditt konto.',
	'qa_email_line2' => 'Vill du inte ändra ditt lösenord kan du ignorera detta meddelande.',
	'qa_email_greet' => 'Hej',
	'qa_email_regards' => 'Hälsningar',
	'qa_confirm_password' => 'Bekräfta lösenord',
	'qa_if_you_are_having_trouble' => 'Om du har problem att klicka på ',
	'qa_copy_paste_url_bellow' => 'knapp, kopiera och klistra in URL:en nedan i din webbläsare.',
	'qa_please_select' => 'Var vänlig och välj ',
	'qa_register' => 'Registrera',
	'qa_registration' => 'Registrering ',
	'qa_not_approved_title' => 'Du är inte godkänd ',
	'qa_not_approved_p' => 'Ditt konto är inte godkänt ännu. Vänligen försök senare.',
	'qa_there_were_problems_with_input' => 'Det uppstod problem med inmatningen ',
	'qa_whoops' => 'Hoppsan!',
	'qa_file_contains_header_row' => 'Innehåller filen en rubrik rad?',
	'qa_csvImport' => 'CSV import',
	'qa_csv_file_to_import' => 'CSV fil att importera',
	'qa_parse_csv' => 'Analysera CSV',
	'qa_import_data' => 'Importera data',
	'qa_imported_rows_to_table' => 'Importerat :rows rader till :table tabellen',
	'qa_subscription-billing' => 'Abbonemang',
	'qa_subscription-payments' => 'Betalningar',
	'qa_basic_crm' => 'Grundläggande CRM',
	'qa_customers' => 'Kunder',
	'qa_customer' => 'Kund',
	'qa_select_all' => 'Välj alla',
	'qa_deselect_all' => 'Avmarkera alla',
	'qa_team-management' => 'Teams',
	'qa_team-management-singular' => 'Team',
	'qa_entry_date' => 'Registreringsdatum',
	'qa_amount' => 'Antal',
	'qa_income_categories' => 'Inkomstkategorier',
	'qa_monthly_report' => 'Månadsrapport',
	'qa_companies' => 'Företag',
	'qa_company_name' => 'Företagsnamn',
	'qa_address' => 'Adress',
	'qa_website' => 'Webbsida',
	'qa_contact_management' => 'Kontakthantering',
	'qa_contacts' => 'Kontakter',
	'qa_company' => 'Företag',
	'qa_first_name' => 'Förnamn',
	'qa_last_name' => 'Efternamn',
	'qa_phone' => 'Telefon',
	'qa_phone1' => 'Telefon 1',
	'qa_phone2' => 'Telefon 2',
	'qa_skype' => 'Skype',
	'qa_photo' => 'Foto (max 8mb)',
	'qa_category_name' => 'Kategorinamn',
	'qa_product_management' => 'Produkthantering',
	'qa_products' => 'Produkter',
	'qa_product_name' => 'Produktnamn',
	'qa_price' => 'Pris',
	'qa_tags' => 'Ettiketter',
	'qa_tag' => 'Ettikett',
	'qa_photo1' => 'Foto1',
	'qa_photo2' => 'Foto2',
	'qa_photo3' => 'Foto3',
	'qa_calendar' => 'Kalender',
	'qa_statuses' => 'Status',
	'qa_task_management' => 'Uppgiftshantering',
	'qa_tasks' => 'Uppgifter',
	'qa_status' => 'Status',
	'qa_attachment' => 'Bilaga',
	'qa_due_date' => 'Förfallodatum',
	'qa_assigned_to' => 'Tilldelad till',
	'qa_assets' => 'Resurser',
	'qa_asset' => 'Resurs',
	'qa_serial_number' => 'Serienummer',
	'qa_location' => 'Plats',
	'qa_locations' => 'Platser',
	'qa_assigned_user' => 'Tilldelad (användare)',
	'qa_notes' => 'Anteckningar',
	'qa_assets_history' => 'Resurshistorik',
	'qa_assets_management' => 'Resurshantering',
	'qa_slug' => 'Slug',
	'qa_content_management' => 'Innehållshantering',
	'qa_text' => 'Text',
	'qa_excerpt' => 'Utdrag',
	'qa_featured_image' => 'Huvudbild',
	'qa_pages' => 'Sidor',
	'qa_axis' => 'Axis',
	'qa_show' => 'Visa',
	'qa_group_by' => 'Gruppera efter',
	'qa_chart_type' => 'Graftyp',
	'qa_create_new_report' => 'Skapa ny rapport',
	'qa_no_reports_yet' => 'Inga rapporter ännu.',
	'qa_created_at' => 'Skapad den',
	'qa_updated_at' => 'Uppdaterad den',
	'qa_deleted_at' => 'Raderad den',
	'qa_reports_x_axis_field' => 'X-axel – vänligen välj ett av datum/tid fälten',
	'qa_reports_y_axis_field' => 'Y-axel – vänligen välj en av nummerfälten',
	'qa_select_crud_placeholder' => 'Vänligen välj en av dina CRUDs',
	'qa_select_dt_placeholder' => 'Vänligen välj någon av datum/tid fälten',
	'qa_aggregate_function_use' => 'Aggregeringsfunktion som skall appliceras',
	'qa_x_axis_group_by' => 'X-axel gruppera efter',
	'qa_x_axis_field' => 'X-axel fält (datum/tid)',
	'qa_y_axis_field' => 'Y-axel fält',
	'qa_integer_float_placeholder' => 'Vänligen välj en av nummer fälten',
	'qa_change_notifications_field_1_label' => 'Skicka notifiering via email till Användaren',
	'qa_change_notifications_field_2_label' => 'Vid inmatning av CRUD ',
	'qa_select_users_placeholder' => 'Vänligen välj någon av dina Användare',
	'qa_is_created' => 'är skapad',
	'qa_is_updated' => 'är uppdaterad',
	'qa_is_deleted' => 'är raderad',
	'qa_notifications' => 'Notifieringar',
	'qa_notify_user' => 'Notifiera Användare',
	'qa_when_crud' => 'När CRUD',
	'qa_create_new_notification' => 'Skapa ny Notifiering',
	'qa_stripe_transactions' => 'Stripe Transaktioner',
	'qa_upgrade_to_premium' => 'Uppgradera till premium',
	'qa_messages' => 'Meddelanden',
	'qa_you_have_no_messages' => 'Du har inga meddelanden',
	'qa_all_messages' => 'Alla meddelanden',
	'qa_new_message' => 'Nytt meddelande',
	'qa_outbox' => 'Utkorg',
	'qa_inbox' => 'Inkorg',
	'qa_recipient' => 'Mottagare',
	'qa_subject' => 'Ämne',
	'qa_message' => 'Meddelande',
	'qa_send' => 'Skicka',
	'qa_reply' => 'Svara',
	'qa_calendar_sources' => 'Kalenderkällor',
	'qa_new_calendar_source' => 'Skapa ny kalenderkälla',
	'qa_crud_title' => 'CRUD titel',
	'qa_crud_date_field' => 'CRUD datumfält',
	'qa_prefix' => 'Prefix',
	'qa_label_field' => 'Ettikettfält',
	'qa_suffix' => 'Suffix',
	'qa_no_calendar_sources' => 'Kalenderkälla saknas',
	'qa_crud_event_field' => 'Händelse etikettfält',
	'qa_create_new_calendar_source' => 'Skapa ny kalenderkälla',
	'qa_edit_calendar_source' => 'Redigera Kalenderkälla',
	'qa_client_management' => 'Klienthantering',
	'qa_client_management_settings' => 'Inställningar klienthantering',
	'qa_country' => 'Land',
	'qa_client_status' => 'Klientstatus',
	'qa_clients' => 'Klienter',
	'qa_client_statuses' => 'Klientstatus',
	'qa_currencies' => 'Valutor',
	'qa_main_currency' => 'Huvudvaluta',
	'qa_documents' => 'Document',
	'qa_file' => 'Fil',
	'qa_income_source' => 'Intäktskällor',
	'qa_income_sources' => 'Intäktskällor',
	'qa_fee_percent' => 'Avgift i procent',
	'qa_note_text' => 'Noteringstext',
	'qa_client' => 'Klient',
	'qa_start_date' => 'Startdatum',
	'qa_budget' => 'Budget',
	'qa_project_status' => 'Projektstatus',
	'qa_sample_answer' => 'Exempel svar',
	'qa_faq_management' => 'FAQ hantering',
	'qa_administrator_can_create_other_users' => 'Administrator (kan skapa användare)',
	'qa_simple_user' => 'Vanlig användare',
	'qa_title' => 'Titel',
	'qa_roles' => 'Roller',
	'qa_role' => 'Roll',
	'qa_user_management' => 'Användarhantering',
	'qa_users' => 'Användare',
	'qa_user' => 'Användare',
	'qa_name' => 'Namn',
	'qa_email' => 'Email',
	'qa_password' => 'Lösenord',
	'qa_remember_token' => 'Kom ihåg mig',
	'qa_permissions' => 'Rättigheter',
	'qa_user_actions' => 'Användarhändelser',
	'qa_action' => 'Händelse',
	'qa_action_model' => 'Händelsemodell',
	'qa_action_id' => 'Händelse id',
	'qa_time' => 'Tid',
	'qa_campaign' => 'Kampanj',
	'qa_campaigns' => 'Kampanjer',
	'qa_description' => 'Beskrivning',
	'qa_valid_from' => 'Giltig från',
	'qa_valid_to' => 'Giltig till',
	'qa_discount_amount' => 'Rabatt belopp',
	'qa_discount_percent' => 'Rabatt procent',
	'qa_coupons_amount' => 'Kupong belopp',
	'qa_coupons' => 'Kuponger',
	'qa_code' => 'Kod',
	'qa_redeem_time' => 'Inlösningstid',
	'qa_coupon_management' => 'Kuponghantering',
	'qa_time_management' => 'Tidshantering',
	'qa_projects' => 'Projekt',
	'qa_reports' => 'Rapporter',
	'qa_time_entries' => 'Tidsregistreringar',
	'qa_work_type' => 'Arbetstyp',
	'qa_work_types' => 'Arbetstyper',
	'qa_project' => 'Projekt',
	'qa_start_time' => 'Starttid',
	'qa_end_time' => 'Sluttid',
	'qa_expense_category' => 'Utgiftskategori',
	'qa_expense_categories' => 'Utgiftskategorier',
	'qa_expense_management' => 'Utgiftshantering',
	'qa_expenses' => 'Utgifter',
	'qa_expense' => 'Utgift',
	'quickadmin_title' => 'Travelexic',
];