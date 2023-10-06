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
	'qa_create' => 'Créer',
	'qa_save' => 'Enregistrer',
	'qa_edit' => 'Modifier',
	'qa_restore' => 'Restaurer',
	'qa_permadel' => 'Supprimer définitivement',
	'qa_all' => 'Tous',
	'qa_trash' => 'Corbeille',
	'qa_view' => 'Afficher',
	'qa_update' => 'Mettre à jour',
	'qa_list' => 'Lister',
	'qa_logout' => 'Déconnexion',
	'qa_add_new' => 'Ajouter',
	'qa_are_you_sure' => 'Êtes-vous sûr ?',
	'qa_back_to_list' => 'Retour à la liste',
	'qa_dashboard' => 'Tableau de bord',
	'qa_delete' => 'Supprimer',
	'qa_delete_selected' => 'Supprimer les éléments sélectionnés',
	'qa_category' => 'Catégorie',
	'qa_categories' => 'Catégories',
	'qa_please_select' => 'Sélectionner',
	'qa_crud_event_field' => 'Champ de l\'étiquette d\'événement',
	'qa_create_new_calendar_source' => 'Créer une nouvelle source de calendrier',
	'qa_edit_calendar_source' => 'Modifier la source du calendrier',
	'qa_client_management' => 'Gestion des clients',
	'qa_client_management_settings' => 'Paramètres de gestion du client',
	'qa_country' => 'Pays',
	'qa_client_status' => 'Statut du client',
	'qa_clients' => 'Clients',
	'qa_client_statuses' => 'Statut des clients',
	'qa_currencies' => 'Devises',
	'qa_main_currency' => 'Devise principale',
	'qa_documents' => 'Documents',
	'qa_file' => 'Fichier',
	'qa_income_source' => 'Source de revenu',
	'qa_income_sources' => 'Sources de revenu',
	'qa_fee_percent' => 'Pourcentage de frais',
	'qa_note_text' => 'Note',
	'qa_client' => 'Client',
	'qa_start_date' => 'Date de début',
	'qa_budget' => 'Budget',
	'qa_project_status' => 'L\'état du projet',
	'qa_project_statuses' => 'Statut du projet',
	'qa_transactions' => 'Transactions',
	'qa_transaction_types' => 'Types de transactions',
	'qa_transaction_type' => 'Type de transaction',
	'qa_transaction_date' => 'Date de la transaction',
	'qa_currency' => 'Devise',
	'qa_current_password' => 'Mot de passe actuel',
	'qa_new_password' => 'Nouveau mot de passe',
	'qa_password_confirm' => 'Confirmation du nouveau mot de passe',
	'qa_dashboard_text' => 'Vous êtes authentifié !',
	'qa_forgot_password' => 'Mot de passe oublié ?',
	'qa_remember_me' => 'Se souvenir de moi',
	'qa_login' => 'Connexion',
	'qa_change_password' => 'Changer le mot de passe',
	'qa_print' => 'Imprimer',
	'qa_copy' => 'Copier',
	'qa_colvis' => 'Visibilité de la colonne',
	'qa_reset_password' => 'Réinitialiser le mot de passe',
	'qa_reset_password_woops' => '<strong>Whoops!</strong> Il y a eu des problèmes d\'entrée :',
	'qa_email_line1' => 'Vous recevez ce courrier électronique parce que nous avons reçu une demande de réinitialisation de mot de passe pour votre compte.',
	'qa_email_line2' => 'Si vous n\'avez pas demandé de réinitialisation d\'un mot de passe, aucune autre action n\'est requise.',
	'qa_email_greet' => 'Bonjour',
	'qa_email_regards' => 'Cordialement',
	'qa_confirm_password' => 'Confirmez le mot de passe',
	'qa_if_you_are_having_trouble' => 'Si vous rencontrez des problèmes, cliquez sur',
	'qa_copy_paste_url_bellow' => 'bouton, copiez et collez l\'URL ci-dessous dans votre navigateur Web:',
	'qa_register' => 'S\'inscrire',
	'qa_registration' => 'Enregistrement',
	'qa_not_approved_title' => 'Vous n\'êtes pas approuvé',
	'qa_not_approved_p' => 'Votre compte n\'est toujours pas approuvé par l\'administrateur. Veuillez patienter et réessayer plus tard.',
	'qa_questions' => 'Questions',
	'qa_question' => 'Question',
	'qa_answer' => 'Réponse',
	'qa_sample_question' => 'Exemple de question',
	'qa_sample_answer' => 'Exemple de réponse',
	'qa_password' => 'Mot de passe',
	'qa_remember_token' => 'Se souvenir du jeton',
	'qa_permissions' => 'Autorisations',
	'qa_user_actions' => 'Actions de l\'utilisateur',
	'qa_action' => 'Action',
	'qa_time' => 'Heure',
	'qa_description' => 'Déscription',
	'qa_valid_from' => 'Validation à partir de ',
	'qa_discount_amount' => 'Montant de l\'abonnement',
	'qa_discount_percent' => '% De réduction',
	'qa_coupons_amount' => 'Montant des coupons',
	'qa_coupons' => 'Coupons',
	'qa_redeem_time' => 'Échangez le temps',
	'qa_coupon_management' => 'Gestion des coupons',
	'qa_time_management' => 'Gestion du temps',
	'qa_projects' => 'Projet',
	'qa_reports' => 'Rapports',
	'qa_time_entries' => 'Entrées de l\'heure',
	'qa_work_type' => 'Type de travail',
	'qa_work_types' => 'Types de travail',
	'qa_project' => 'Projet',
	'qa_start_time' => 'Heure de début',
	'qa_end_time' => 'Heure de fin',
	'qa_expense_category' => 'Catégorie de dépenses',
	'qa_expense_categories' => 'Catégories de dépenses',
	'qa_expense_management' => 'Gestion des dépenses',
	'qa_expenses' => 'Dépenses',
	'qa_expense' => 'Dépense',
	'qa_entry_date' => 'Date d\'entrée',
	'qa_amount' => 'Montant',
	'qa_income_categories' => 'Catégories de revenu',
	'qa_monthly_report' => 'Rapport mensuel',
	'qa_companies' => 'Organisme',
	'qa_company_name' => 'Nom de l\'organisme',
	'qa_address' => 'Addresse',
	'qa_website' => 'Site web',
	'qa_contact_management' => 'Gestion des contacts',
	'qa_contacts' => 'Contacts',
	'qa_company' => 'Organisme',
	'qa_first_name' => 'Prénom',
	'qa_last_name' => 'Nom',
	'qa_phone' => 'Téléphone',
	'qa_category_name' => 'Nom de la catégorie',
	'qa_product_management' => 'Gestion des produits',
	'qa_products' => 'Produits',
	'qa_product_name' => 'Désignation du produit',
	'qa_price' => 'Prix',
	'qa_calendar' => 'Calendrier',
	'qa_statuses' => 'Statut',
	'qa_task_management' => 'Gestion des tâches',
	'qa_tasks' => 'Tâches',
	'qa_status' => 'Statut',
	'qa_attachment' => 'Pièce jointe',
	'qa_due_date' => 'Date d\'échéance',
	'qa_assigned_to' => 'Assigné à',
	'qa_assets' => 'Les atouts',
	'qa_asset' => 'Atout',
	'qa_serial_number' => 'Numéro de série',
	'qa_assigned_user' => 'Affecté (utilisateur)',
	'qa_assets_history' => 'Historique des actifs',
	'qa_assets_management' => 'Gestion d\'actifs',
	'qa_slug' => 'Slug',
	'qa_content_management' => 'Gestion de contenu',
	'qa_text' => 'Texte',
	'qa_excerpt' => 'Extrait',
	'qa_featured_image' => 'Image à la une',
	'qa_axis' => 'Axe',
	'qa_show' => 'Afficher',
	'qa_group_by' => 'Grouper par',
	'qa_chart_type' => 'Type de graphique',
	'qa_create_new_report' => 'Créer un nouveau rapport',
	'qa_select_dt_placeholder' => 'Sélectionnez un des champs date / heure',
	'qa_aggregate_function_use' => 'Fonction agrégée à utiliser',
	'qa_change_notifications_field_1_label' => 'Envoyer une notification par courrier électronique à l\'utilisateur',
	'qa_select_users_placeholder' => 'Sélectionnez un de vos Utilisateurs',
	'qa_is_created' => 'est créé',
	'qa_is_updated' => 'est mis à jour',
	'qa_is_deleted' => 'est supprimé',
	'qa_notifications' => 'Notifications',
	'qa_notify_user' => 'Notifier l\'utilisateur',
	'qa_create_new_notification' => 'Créer une nouvelle notification',
	'qa_stripe_transactions' => 'Transactions de rayures',
	'qa_upgrade_to_premium' => 'Passer à la version premium',
	'qa_messages' => 'Messages',
	'qa_you_have_no_messages' => 'Vous n\'avez pas de messages.',
	'qa_all_messages' => 'Tous les messages',
	'qa_new_message' => 'Nouveau message',
	'qa_outbox' => 'Boîte d\'envoi',
	'qa_inbox' => 'Boîte de réception',
	'qa_recipient' => 'Destinataire',
	'qa_message' => 'Message',
	'qa_send' => 'Envoyer',
	'qa_reply' => 'Répondre',
	'qa_calendar_sources' => 'Sources de calendrier',
	'qa_new_calendar_source' => 'Créer une nouvelle source de calendrier',
	'qa_crud_title' => 'Titre de Crud',
	'qa_crud_date_field' => 'Champ de dates de Crud',
	'qa_prefix' => 'Préfixe',
	'qa_label_field' => 'Champ d\'étiquette',
	'qa_suffix' => 'Suffixe',
	'qa_no_calendar_sources' => 'Il n\'y a pas encore de sources de calendrier.',
	'qa_no_entries_in_table' => 'Aucun enregistrement',
	'qa_faq_management' => 'Gestion des questions',
	'qa_administrator_can_create_other_users' => 'Administrateur',
	'qa_simple_user' => 'Utilisateur',
	'qa_title' => 'Titre',
	'qa_roles' => 'Rôles',
	'qa_role' => 'Rôle',
	'qa_user_management' => 'Gestion des Utilisateurs',
	'qa_users' => 'Utilisateurs',
	'qa_user' => 'Utilisateur',
	'qa_name' => 'Nom',
	'qa_email' => 'eMail',
	'qa_valid_to' => 'Valide jusqu\'à',
	'qa_phone1' => 'Téléphone 1',
	'qa_tags' => 'Tags',
	'qa_tag' => 'Tag',
	'qa_when_crud' => 'Sur modification',
	'qa_phone2' => 'Téléphone 2',
	'qa_location' => 'Localisation',
	'qa_locations' => 'Localisations',
	'qa_created_at' => 'Créer à',
	'qa_updated_at' => 'Modifier à ',
	'qa_deleted_at' => 'Supprimer à',
	'qa_subject' => 'Sujet',
	'qa_imported_rows_to_table' => ':rows lignes importées dans la table :table',
	'qa_pages' => 'Pages',
	'qa_csv' => 'CSV',
	'qa_excel' => 'Excel',
	'qa_pdf' => 'PDF',
	'qa_import_data' => 'Importer les données ',
	'qa_action_model' => 'Modèle de l\'action',
	'qa_action_id' => 'ID de l\'action',
	'qa_campaign' => 'Campagne',
	'qa_campaigns' => 'Campagnes',
	'qa_code' => 'Code',
	'qa_skype' => 'Skype',
	'qa_photo' => 'Photo (max 8Mo)',
	'qa_photo1' => 'Photo 1',
	'qa_photo2' => 'Photo 2',
	'qa_photo3' => 'Photo 3',
	'qa_notes' => 'Notes',
	'qa_no_reports_yet' => 'Il n\'y a pas de rapport.',
	'qa_whoops' => 'Oups !',
	'qa_file_contains_header_row' => 'Le fichier contient t-il une ligne d\'entêtes.',
	'qa_csvImport' => 'Importer CSV.',
	'qa_csv_file_to_import' => 'Fichier CSV à importer.',
	'qa_parse_csv' => 'Analyser CSV.',
	'qa_there_were_problems_with_input' => 'Il y a eu un problème avec cette entrée',
	'qa_subscription-billing' => 'Abonnements',
	'qa_subscription-payments' => 'Paiements',
	'qa_basic_crm' => 'CRM de base',
	'qa_customers' => 'Clients',
	'qa_customer' => 'Client',
	'qa_reports_x_axis_field' => 'Axe-X veuillez sélectionner un camps date/heure',
	'qa_reports_y_axis_field' => 'Axe-Y Veuillez sélectionner un nombre de champs',
	'qa_select_crud_placeholder' => 'Veuillez sélectinner votre CURDs',
	'qa_x_axis_group_by' => 'Axe-X groupper par',
	'qa_x_axis_field' => 'Champ Axe-X (date/heure)',
	'qa_y_axis_field' => 'Champ Axe-Y',
	'qa_select_all' => 'Sélectionner tout',
	'qa_deselect_all' => 'Désélectionner tout',
	'qa_sample_category' => 'Exemple de catégorie',
	'qa_integer_float_placeholder' => 'Sélectionner un des champs entier/nombre décimal.',
	'qa_custom_controller_index' => 'Indice de controlleur personnalisé.',
	'qa_change_notifications_field_2_label' => 'A l\'entrée en CRUD',
	'qa_team-management' => 'Equipes',
	'qa_team-management-singular' => 'Equipe',
	'quickadmin_title' => 'Travelexic',
];