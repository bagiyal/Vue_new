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
		'user-actions' => [		'title' => 'User actions',		'created_at' => 'Tempo',		'fields' => [			'user' => 'User',			'action' => 'Action',			'action-model' => 'Action model',			'action-id' => 'Action id',		],	],
		'teams' => [		'title' => 'Teams',		'fields' => [			'name' => 'Name',		],	],
		'assets-management' => [		'title' => 'Assets management',		'fields' => [		],	],
		'assets-categories' => [		'title' => 'Categories',		'fields' => [		],	],
		'assets-statuses' => [		'title' => 'Statuses',		'fields' => [		],	],
		'assets-locations' => [		'title' => 'Locations',		'fields' => [		],	],
		'assets' => [		'title' => 'Assets',		'fields' => [		],	],
		'assets-history' => [		'title' => 'Assets history',		'created_at' => 'Tempo',		'fields' => [		],	],
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
	'qa_create' => 'Criar',
	'qa_save' => 'Salvar',
	'qa_edit' => 'Editar',
	'qa_view' => 'Visualizar',
	'qa_update' => 'Atualizar',
	'qa_list' => 'Listar',
	'qa_no_entries_in_table' => 'Sem entradas na tabela',
	'qa_custom_controller_index' => 'Índice de Controller personalizado.',
	'qa_logout' => 'Sair',
	'qa_add_new' => 'Novo',
	'qa_are_you_sure' => 'Tem certeza?',
	'qa_back_to_list' => 'Voltar',
	'qa_dashboard' => 'Painel',
	'qa_delete' => 'Excluir',
	'qa_restore' => 'Restaurar',
	'qa_permadel' => 'Excluir',
	'qa_all' => 'Todos',
	'qa_trash' => 'Lixo',
	'qa_delete_selected' => 'Excluir Selecionados',
	'qa_category' => 'Categoria',
	'qa_categories' => 'Categorias',
	'qa_sample_category' => 'Categoria Exemplo',
	'qa_questions' => 'Questões',
	'qa_question' => 'Questão',
	'qa_answer' => 'Resposta',
	'qa_administrator_can_create_other_users' => 'Administrador',
	'qa_simple_user' => 'Usuário simples',
	'qa_title' => 'Título',
	'qa_roles' => 'Funções',
	'qa_role' => 'Função',
	'qa_name' => 'Nome',
	'qa_password' => 'Senha',
	'qa_remember_token' => 'Lembrar Senha',
	'qa_permissions' => 'Permissões',
	'qa_action' => 'Ação',
	'qa_forgot_password' => 'Esqueceu-se da senha?',
	'qa_remember_me' => 'Lembrar',
	'qa_change_password' => 'Alterar senha',
	'qa_print' => 'Imprimir',
	'qa_copy' => 'Copiar',
	'qa_colvis' => 'Colunas Visíveis',
	'qa_reset_password' => 'Redefinir senha',
	'qa_email_greet' => 'Olá',
	'qa_confirm_password' => 'Confirmação da senha',
	'qa_please_select' => 'Selecione por favor',
	'qa_sample_question' => 'Questão Exemplo',
	'qa_sample_answer' => 'Resposta Exemplo',
	'qa_faq_management' => 'Gestão de FAQ',
	'qa_user_management' => 'Gestão de usuários',
	'qa_users' => 'Usuários',
	'qa_user' => 'Usuário',
	'qa_email' => 'E-mail',
	'qa_user_actions' => 'Ações do usuário',
	'qa_action_model' => 'Modelo de ação',
	'qa_action_id' => 'ID de ação',
	'qa_time' => 'Tempo',
	'qa_campaign' => 'Campanha',
	'qa_campaigns' => 'Campanhas',
	'qa_description' => 'Descrição',
	'qa_valid_from' => 'Válido de',
	'qa_valid_to' => 'Válido até',
	'qa_discount_amount' => 'Quantia de desconto',
	'qa_discount_percent' => 'Percentual de desconto',
	'qa_coupons_amount' => 'Quantia de cupons',
	'qa_coupons' => 'Cupons',
	'qa_code' => 'Código',
	'qa_redeem_time' => 'Tempo de resgate',
	'qa_coupon_management' => 'Gesão de cupons',
	'qa_time_management' => 'Gestão de tempo',
	'qa_projects' => 'Projetos',
	'qa_reports' => 'Relatórios',
	'qa_time_entries' => 'Entradas de tempo',
	'qa_work_type' => 'Tipo de trabalho',
	'qa_work_types' => 'Tipos de trabalho',
	'qa_project' => 'Projeto',
	'qa_start_time' => 'Tempo de início',
	'qa_end_time' => 'Tempo de final',
	'qa_expense_category' => 'Categoria de Despesa',
	'qa_expense_categories' => 'Categorias de Despesa',
	'qa_expense_management' => 'Gestão de Despesa',
	'qa_expenses' => 'Despesas',
	'qa_expense' => 'Despesa',
	'qa_entry_date' => 'Data de entrada',
	'qa_amount' => 'Quantidade',
	'qa_income_categories' => 'Categorias de entrada',
	'qa_monthly_report' => 'Relatório mensal',
	'qa_companies' => 'Empresas',
	'qa_company_name' => 'Nome da empresa',
	'qa_address' => 'Endereço',
	'qa_website' => 'Website',
	'qa_contact_management' => 'Gestão de contato',
	'qa_contacts' => 'Contatos',
	'qa_company' => 'Empresa',
	'qa_first_name' => 'Primeiro nome',
	'qa_last_name' => 'Último nome',
	'qa_phone' => 'Telefone',
	'qa_phone1' => 'Telefone 1',
	'qa_phone2' => 'Telefone 2',
	'qa_skype' => 'Skype',
	'qa_photo' => 'Foto (máx. 8 MB)',
	'qa_category_name' => 'Nome da categoria',
	'qa_product_management' => 'Gestão de produtos',
	'qa_products' => 'Produtos',
	'qa_product_name' => 'Nome do produto',
	'qa_price' => 'Preço',
	'qa_tags' => 'Tags',
	'qa_tag' => 'Tag',
	'qa_photo1' => 'Foto1',
	'qa_photo2' => 'Foto2',
	'qa_photo3' => 'Foto3',
	'qa_calendar' => 'Calendário',
	'qa_statuses' => 'Status',
	'qa_task_management' => 'Gestão de tarefas',
	'qa_tasks' => 'Tarefas',
	'qa_status' => 'Estado',
	'qa_attachment' => 'Anexo',
	'qa_due_date' => 'Data de vencimento',
	'qa_assigned_to' => 'Atribuído',
	'qa_assets' => 'Ativos',
	'qa_asset' => 'Ativo',
	'qa_serial_number' => 'Número de série',
	'qa_location' => 'Local',
	'qa_locations' => 'Locais',
	'qa_assigned_user' => 'Atribuído (usuário)',
	'qa_notes' => 'Notas',
	'qa_assets_history' => 'Histórico de ativos',
	'qa_assets_management' => 'Gestão de ativos',
	'qa_content_management' => 'Gestão de conteúdo',
	'qa_text' => 'Texto',
	'qa_pages' => 'Páginas',
	'qa_axis' => 'Eixo',
	'qa_show' => 'Exibir',
	'qa_group_by' => 'Agrupar por',
	'qa_chart_type' => 'Tipo de gráfico',
	'qa_create_new_report' => 'Criar novo relatório',
	'qa_no_reports_yet' => 'Nenhum relatório ainda.',
	'qa_created_at' => 'Criado em',
	'qa_updated_at' => 'Atualizado em',
	'qa_deleted_at' => 'Excluído em',
	'qa_reports_x_axis_field' => 'Eixo X - por favor escolha um dos campos de data/hora',
	'qa_reports_y_axis_field' => 'Eixo Y - por favor escolha um dos campos numéricos',
	'qa_select_crud_placeholder' => 'Por favor selecione um de seus CRUDs',
	'qa_select_dt_placeholder' => 'Por favor selecione um dos campos de data/hora',
	'qa_aggregate_function_use' => 'Agregar função a utilizar',
	'qa_x_axis_group_by' => 'Eixo X agrupar por',
	'qa_x_axis_field' => 'Campo do eixo X (data/hora)',
	'qa_y_axis_field' => 'Campo do eixo Y',
	'qa_integer_float_placeholder' => 'Por favor selecione um dos campos inteiros/float',
	'qa_change_notifications_field_1_label' => 'Enviar notificação por e-mail ao Usuário',
	'qa_select_users_placeholder' => 'Por favor selecione um de seus Usuários',
	'qa_is_created' => 'foi criado',
	'qa_is_updated' => 'foi atualizado',
	'qa_is_deleted' => 'foi excluído',
	'qa_notifications' => 'Notificações',
	'qa_notify_user' => 'Notificar usuário',
	'qa_when_crud' => 'Quando CRUD',
	'qa_create_new_notification' => 'Criar nova Notificação',
	'qa_stripe_transactions' => 'Classe de transações',
	'qa_upgrade_to_premium' => 'Atualizar para Premium',
	'qa_messages' => 'Mensagens',
	'qa_you_have_no_messages' => 'Você não possui nenhuma mensagem.',
	'qa_all_messages' => 'Todas as mensagens',
	'qa_new_message' => 'Nova mensagem',
	'qa_outbox' => 'Caixa de saída',
	'qa_inbox' => 'Caixa de entrada',
	'qa_recipient' => 'Destinatário',
	'qa_subject' => 'Assunto',
	'qa_message' => 'Mensagem',
	'qa_send' => 'Enviar',
	'qa_reply' => 'Responder',
	'qa_calendar_sources' => 'Fontes de calendário',
	'qa_new_calendar_source' => 'Criar nova fonte de calendário',
	'qa_crud_title' => 'Título do CRUD',
	'qa_crud_date_field' => 'Campo de data CRUD',
	'qa_prefix' => 'Prefixo',
	'qa_label_field' => 'Campo de rótulo',
	'qa_suffix' => 'Sufixo',
	'qa_no_calendar_sources' => 'Nenhuma fonte de calendário ainda.',
	'qa_crud_event_field' => 'Campo de rótulo do evento',
	'qa_create_new_calendar_source' => 'Criar nova Fonte de Calendário',
	'qa_edit_calendar_source' => 'Editar Fonte de Calendário',
	'qa_client_management' => 'Gest~de clientes',
	'qa_client_management_settings' => 'Configurações de Gestão de clientes',
	'qa_country' => 'País',
	'qa_client_status' => 'Estado do cliente',
	'qa_clients' => 'Clientes',
	'qa_client_statuses' => 'Estado do cliente',
	'qa_currencies' => 'Moedas',
	'qa_main_currency' => 'Moeda principal',
	'qa_documents' => 'Documentos',
	'qa_file' => 'Arquivo',
	'qa_income_source' => 'Fonte de entrada',
	'qa_income_sources' => 'Fontes de entrada',
	'qa_fee_percent' => 'Percentual de taxa',
	'qa_note_text' => 'Texto da nota',
	'qa_client' => 'Cliente',
	'qa_start_date' => 'Data de início',
	'qa_budget' => 'Orçamento',
	'qa_project_status' => 'Estado do projeto',
	'qa_project_statuses' => 'Estado do projeto',
	'qa_transactions' => 'Transações',
	'qa_transaction_types' => 'Tipos de transação',
	'qa_transaction_type' => 'Tipo de transação',
	'qa_transaction_date' => 'Data da transação',
	'qa_currency' => 'Moeda',
	'qa_current_password' => 'Senha atual',
	'qa_new_password' => 'Nova senha',
	'qa_password_confirm' => 'Confirmação da nova senha',
	'qa_dashboard_text' => 'Sessão iniciada',
	'qa_login' => 'Entrar',
	'qa_reset_password_woops' => '<strong> Ops! </strong> Há problemas com a entrada:',
	'qa_email_line1' => 'Você está recebendo este e-mail porque nós recebemos uma solicitação de redefinição de senha para a sua conta.',
	'qa_email_line2' => 'Se você não solicitou redefinição de senha, nenhuma ação é necessária.',
	'qa_if_you_are_having_trouble' => 'Se você está tendo problemas para clicar no',
	'qa_copy_paste_url_bellow' => 'botão, copie e cole a URL abaixo no seu navegador web:',
	'qa_excerpt' => 'Resumo',
	'qa_featured_image' => 'Imagem em destaque',
	'qa_change_notifications_field_2_label' => 'Quando entrar no CRUD',
	'qa_email_regards' => 'Saudações',
	'qa_register' => 'Registar',
	'qa_registration' => 'Registo',
	'qa_not_approved_title' => 'A sua conta não está aprovada',
	'qa_not_approved_p' => 'Sua conta não foi liberada ainda pelo administrador, por favor, aguarde e tente mais tarde.',
	'qa_there_were_problems_with_input' => 'Há problemas com a entrada',
	'qa_whoops' => 'Ops!',
	'qa_slug' => 'Slug',
	'qa_csv' => 'CSV',
	'qa_excel' => 'Excel',
	'qa_pdf' => 'PDF',
	'qa_file_contains_header_row' => 'O arquivo contém cabeçalho?',
	'qa_csvImport' => 'Importação CSV',
	'qa_csv_file_to_import' => 'Arquivo CSV para importar',
	'qa_parse_csv' => 'Analisar CSV',
	'qa_import_data' => 'Importar data',
	'qa_imported_rows_to_table' => 'Importado :rows linhas para tabela :table',
	'qa_subscription-billing' => 'Assinaturas',
	'qa_subscription-payments' => 'Pagamentos',
	'qa_basic_crm' => 'CRM Básico',
	'qa_customers' => 'Clientes',
	'qa_customer' => 'Cliente',
	'qa_select_all' => 'Selecionar tudo',
	'qa_deselect_all' => 'Cacelar seleção',
	'qa_team-management' => 'Equipes',
	'qa_team-management-singular' => 'Equipe',
	'quickadmin_title' => 'Travelexic',
];