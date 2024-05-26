const words = [
    'قرد', 'كتاب', 'مكتب', 'سيارة', 'مستشفى', 'مدرسة', 'جامعة', 'كمبيوتر', 'هاتف', 'شاشة',
    'نافذة', 'باب', 'مفتاح', 'زهرة', 'قلم', 'ورقة', 'كرسي', 'طاولة', 'ثلاجة', 'غسالة',
    'مروحة', 'مكيف', 'سماعة', 'جهاز', 'ساعة', 'حقيبة', 'خزانة', 'شمعة', 'مصباح', 'تلفاز',
    'راديو', 'جريدة', 'مجلة', 'قهوة', 'شاي', 'عصير', 'ماء', 'حليب', 'تفاحة', 'موز',
    'برتقال', 'ليمون', 'عنب', 'فراولة', 'بطيخ', 'شمام', 'رمان', 'كيوي', 'مانجو', 'أناناس',
    'كمثرى', 'خوخ', 'مشمش', 'كرز', 'توت', 'برقوق', 'بندق', 'لوز', 'جوز', 'فستق',
    'كستناء', 'سمك', 'دجاج', 'لحم', 'أرز', 'خبز', 'زبدة', 'جبن', 'بيض', 'ملح',
    'سكر', 'فلفل', 'زيت', 'خل', 'عسل', 'مربى', 'طحين', 'شوربة', 'معكرونة', 'بيتزا',
    'سندويتش', 'برجر', 'سلطة', 'فطور', 'غداء', 'عشاء', 'طبخ', 'خبز', 'طعام', 'مطبخ',
    'حديقة', 'قارب', 'طيارة', 'مدينة', 'بناء', 'طائرة', 'قطار', 'سفينة', 'دراجة', 'نقل',
    'جسر', 'شارع', 'طريق', 'رصيف', 'ميناء', 'مطار', 'موقف', 'إشارة', 'مبنى', 'عمارة',
    'شقة', 'فيلا', 'قصر', 'كوخ', 'خيمة', 'مزرعة', 'حقل', 'بستان', 'غابة', 'صحراء',
    'جبل', 'وادي', 'نهر', 'بحيرة', 'محيط', 'شاطئ', 'جزيرة', 'رمل', 'صخرة', 'نبات',
    'شجرة', 'عشب', 'نخلة', 'تمر', 'رمان', 'لبن', 'زبدة', 'لبن', 'جبن', 'زبدة',
    'خبز', 'أرز', 'معكرونة', 'بيتزا', 'سندويتش', 'برجر', 'لحم', 'دجاج', 'سمك', 'بيض',
    'ملح', 'سكر', 'فلفل', 'زيت', 'خل', 'عسل', 'مربى', 'شوربة', 'طحين', 'فطور',
    'غداء', 'عشاء', 'طبخ', 'خبز', 'طعام', 'قلم', 'ورقة', 'دفتر', 'مكتبة', 'لابتوب',
    'شاشة', 'طابعة', 'ماوس', 'كيبورد', 'مخزن', 'خزانة', 'حقيبة', 'قفل', 'ميكروويف', 'فرن',
    'غلاية', 'خلاط', 'شاحن', 'مستشفى', 'مدرسة', 'جامعة', 'مزرعة', 'بستان', 'غابة', 'صحراء',
    'وادي', 'بحيرة', 'محيط', 'شاطئ', 'صخرة', 'نبات', 'شجرة', 'زهرة', 'تفاح', 'بندق',
    'فستق', 'بندق', 'جوز', 'كستناء', 'عصير', 'لبن', 'جبن', 'زبدة', 'خبز', 'أرز',
    'معكرونة', 'بيتزا', 'سندويتش', 'برجر', 'لحم', 'دجاج', 'سمك', 'بيض', 'ملح', 'سكر',
    'فلفل', 'زيت', 'خل', 'عسل', 'مربى', 'شوربة', 'طحين', 'فطور', 'غداء', 'عشاء',
    'طبخ', 'خبز', 'طعام', 'مطبخ', 'قلم', 'ورقة', 'دفتر', 'كتاب', 'مكتبة', 'كمبيوتر',
    'لابتوب', 'شاشة', 'طابعة', 'ماوس', 'كيبورد', 'مكتب', 'كرسي', 'طاولة', 'مخزن', 'خزانة',
    'حقيبة', 'مفتاح', 'قفل', 'باب', 'نافذة', 'مكيف', 'مروحة', 'ثلاجة', 'غسالة', 'ميكروويف',
    'فرن', 'غلاية', 'خلاط', 'جهاز', 'ساعة', 'هاتف', 'شاحن', 'سماعة', 'مستشفى', 'مدرسة',
    'جامعة', 'حديقة', 'مزرعة', 'مبنى', 'عمارة', 'شقة', 'فيلا', 'قصر', 'كوخ', 'خيمة',
    'بستان', 'حديقة', 'غابة', 'صحراء', 'جبل', 'وادي', 'نهر', 'بحيرة', 'محيط', 'شاطئ',
    'جزيرة', 'رمل', 'صخرة', 'نبات', 'شجرة', 'زهرة', 'عشب', 'نخلة', 'تمر', 'رمان',
    'ليمون', 'برتقال', 'عنب', 'تفاح', 'موز', 'كيوي', 'مانجو', 'أناناس', 'فراولة', 'توت',
    'شمام', 'بطيخ', 'خوخ', 'كمثرى', 'مشمش', 'كرز', 'برقوق', 'مكسرات', 'لوز', 'فستق',
    'بندق', 'جوز', 'كستناء', 'قهوة', 'شاي', 'عصير', 'ماء', 'حليب', 'لبن', 'جبن',
    'زبدة', 'خبز', 'أرز', 'معكرونة', 'بيتزا', 'سندويتش', 'برجر', 'لحم', 'دجاج', 'سمك',
    'بيض', 'ملح', 'سكر', 'فلفل', 'زيت', 'خل', 'عسل', 'مربى', 'شوربة', 'طحين',
    'فطور', 'غداء', 'عشاء', 'طبخ', 'خبز', 'طعام', 'مطبخ', 'قلم', 'ورقة', 'دفتر',
    'كتاب', 'مكتبة', 'كمبيوتر', 'لابتوب', 'شاشة', 'طابعة', 'ماوس', 'كيبورد', 'مكتب', 'كرسي',
    'طاولة', 'مخزن', 'خزانة', 'حقيبة', 'مفتاح', 'قفل', 'باب', 'نافذة', 'مكيف', 'مروحة',
    'ثلاجة', 'غسالة', 'ميكروويف', 'فرن', 'غلاية', 'خلاط', 'جهاز', 'ساعة', 'هاتف', 'شاحن',
    'سماعة', 'مستشفى', 'مدرسة', 'جامعة', 'حديقة', 'مزرعة', 'مبنى', 'عمارة', 'شقة', 'فيلا',
    'قصر', 'كوخ', 'خيمة', 'بستان', 'غابة', 'صحراء', 'جبل', 'وادي', 'نهر', 'بحيرة',
    'محيط', 'شاطئ', 'جزيرة', 'رمل', 'صخرة', 'نبات', 'شجرة', 'زهرة', 'عشب', 'نخلة',
    'تمر', 'رمان', 'ليمون', 'برتقال', 'عنب', 'تفاح', 'موز', 'كيوي', 'مانجو', 'أناناس',
    'فراولة', 'توت', 'شمام', 'بطيخ', 'خوخ', 'كمثرى', 'مشمش', 'كرز', 'برقوق', 'مكسرات',
    'لوز', 'فستق', 'بندق', 'جوز', 'كستناء', 'قهوة', 'شاي', 'عصير', 'ماء', 'حليب',
    'لبن', 'جبن', 'زبدة', 'خبز', 'أرز', 'معكرونة', 'بيتزا', 'سندويتش', 'برجر', 'لحم',
    'دجاج', 'سمك', 'بيض', 'ملح', 'سكر', 'فلفل', 'زيت', 'خل', 'عسل', 'مربى',
    'شوربة', 'طحين', 'فطور', 'غداء', 'عشاء', 'طبخ', 'خبز', 'طعام', 'مطبخ', 'قلم',
    'ورقة', 'دفتر', 'كتاب', 'مكتبة', 'كمبيوتر', 'لابتوب', 'شاشة', 'طابعة', 'ماوس', 'كيبورد',
    'مكتب', 'كرسي', 'طاولة', 'مخزن', 'خزانة', 'حقيبة', 'مفتاح', 'قفل', 'باب', 'نافذة',
    'مكيف', 'مروحة', 'ثلاجة', 'غسالة', 'ميكروويف', 'فرن', 'غلاية', 'خلاط', 'جهاز', 'ساعة',
    'هاتف', 'شاحن', 'سماعة', 'مستشفى', 'مدرسة', 'جامعة', 'حديقة', 'مزرعة', 'مبنى', 'عمارة',
    'شقة', 'فيلا', 'قصر', 'كوخ', 'خيمة', 'بستان', 'حديقة', 'غابة', 'صحراء', 'جبل',
    'وادي', 'نهر', 'بحيرة', 'محيط', 'شاطئ', 'جزيرة', 'رمل', 'صخرة', 'نبات', 'شجرة',
    'زهرة', 'عشب', 'نخلة', 'تمر', 'رمان', 'ليمون', 'برتقال', 'عنب', 'تفاح', 'موز',
    'كيوي', 'مانجو', 'أناناس', 'فراولة', 'توت', 'شمام', 'بطيخ', 'خوخ', 'كمثرى', 'مشمش',
    'كرز', 'برقوق', 'مكسرات', 'لوز', 'فستق', 'بندق', 'جوز', 'كستناء', 'قهوة', 'شاي',
    'عصير', 'ماء', 'حليب', 'لبن', 'جبن', 'زبدة', 'خبز', 'أرز', 'معكرونة', 'بيتزا',
    'سندويتش', 'برجر', 'لحم', 'دجاج', 'سمك', 'بيض', 'ملح', 'سكر', 'فلفل', 'زيت',
    'خل', 'عسل', 'مربى', 'شوربة', 'طحين', 'فطور', 'غداء', 'عشاء', 'طبخ', 'خبز',
    'طعام', 'مطبخ', 'قلم', 'ورقة', 'دفتر', 'كتاب', 'مكتبة', 'كمبيوتر', 'لابتوب', 'شاشة',
    'طابعة', 'ماوس', 'كيبورد', 'مكتب', 'كرسي', 'طاولة', 'مخزن', 'خزانة', 'حقيبة', 'مفتاح',
    'قفل', 'باب', 'نافذة', 'مكيف', 'مروحة', 'ثلاجة', 'غسالة', 'ميكروويف', 'فرن', 'غلاية',
    'خلاط', 'جهاز', 'ساعة', 'هاتف', 'شاحن', 'سماعة', 'مستشفى', 'مدرسة', 'جامعة', 'حديقة',
    'مزرعة', 'مبنى', 'عمارة', 'شقة', 'فيلا', 'قصر', 'كوخ', 'خيمة', 'بستان', 'غابة',
    'صحراء', 'جبل', 'وادي', 'نهر', 'بحيرة', 'محيط', 'شاطئ', 'جزيرة', 'رمل', 'صخرة',
    'نبات', 'شجرة', 'زهرة', 'عشب', 'نخلة', 'تمر', 'رمان', 'ليمون', 'برتقال', 'عنب',
    'تفاح', 'موز', 'كيوي', 'مانجو', 'أناناس', 'فراولة', 'توت', 'شمام', 'بطيخ', 'خوخ',
    'كمثرى', 'مشمش', 'كرز', 'برقوق', 'مكسرات', 'لوز', 'فستق', 'بندق', 'جوز', 'كستناء',
    'قهوة', 'شاي', 'عصير', 'ماء', 'حليب', 'لبن', 'جبن', 'زبدة', 'خبز', 'أرز',
    'معكرونة', 'بيتزا', 'سندويتش', 'برجر', 'لحم', 'دجاج', 'سمك', 'بيض', 'ملح', 'سكر',
    'فلفل', 'زيت', 'خل', 'عسل', 'مربى', 'شوربة', 'طحين', 'فطور', 'غداء', 'عشاء',
    'طبخ', 'خبز', 'طعام', 'مطبخ', 'قلم', 'ورقة', 'دفتر', 'كتاب', 'مكتبة', 'كمبيوتر',
    'لابتوب', 'شاشة', 'طابعة', 'ماوس', 'كيبورد', 'مكتب', 'كرسي', 'طاولة', 'مخزن', 'خزانة',
    'حقيبة', 'مفتاح', 'قفل', 'باب', 'نافذة', 'مكيف', 'مروحة', 'ثلاجة', 'غسالة', 'ميكروويف',
    'فرن', 'غلاية', 'خلاط', 'جهاز', 'ساعة', 'هاتف', 'شاحن', 'سماعة', 'مستشفى', 'مدرسة',
    'جامعة', 'حديقة', 'مزرعة', 'مبنى', 'عمارة', 'شقة', 'فيلا', 'قصر', 'كوخ', 'خيمة',
    'بستان', 'حديقة', 'غابة', 'صحراء', 'جبل', 'وادي', 'نهر', 'بحيرة', 'محيط', 'شاطئ',
    'جزيرة', 'رمل', 'صخرة', 'نبات', 'شجرة', 'زهرة', 'عشب', 'نخلة', 'تمر', 'رمان',
    'ليمون', 'برتقال', 'عنب', 'تفاح', 'موز', 'كيوي', 'مانجو', 'أناناس', 'فراولة', 'توت',
    'شمام', 'بطيخ', 'خوخ', 'كمثرى', 'مشمش', 'كرز', 'برقوق', 'مكسرات', 'لوز', 'فستق',
    'بندق', 'جوز', 'كستناء', 'قهوة', 'شاي', 'عصير', 'ماء', 'حليب', 'لبن', 'جبن',
    'زبدة', 'خبز', 'أرز', 'معكرونة', 'بيتزا', 'سندويتش', 'برجر', 'لحم', 'دجاج', 'سمك',
    'بيض', 'ملح', 'سكر', 'فلفل', 'زيت', 'خل', 'عسل', 'مربى', 'شوربة', 'طحين',
    'فطور', 'غداء', 'عشاء', 'طبخ', 'خبز', 'طعام', 'مطبخ', 'قلم', 'ورقة', 'دفتر',
    'كتاب', 'مكتبة', 'كمبيوتر', 'لابتوب', 'شاشة', 'طابعة', 'ماوس', 'كيبورد', 'مكتب', 'كرسي',
    'طاولة', 'مخزن', 'خزانة', 'حقيبة', 'مفتاح', 'قفل', 'باب', 'نافذة', 'مكيف', 'مروحة',
    'ثلاجة', 'غسالة', 'ميكروويف', 'فرن', 'غلاية', 'خلاط', 'جهاز', 'ساعة', 'هاتف', 'شاحن',
    'سماعة', 'مستشفى', 'مدرسة', 'جامعة', 'حديقة', 'مزرعة', 'مبنى', 'عمارة', 'شقة', 'فيلا',
    'قصر', 'كوخ', 'خيمة', 'بستان', 'غابة', 'صحراء', 'جبل', 'وادي', 'نهر', 'بحيرة',
    'محيط', 'شاطئ', 'جزيرة', 'رمل', 'صخرة', 'نبات', 'شجرة', 'زهرة', 'عشب', 'نخلة',
    'تمر', 'رمان', 'ليمون', 'برتقال', 'عنب', 'تفاح', 'موز', 'كيوي', 'مانجو', 'أناناس',
    'فراولة', 'توت', 'شمام', 'بطيخ', 'خوخ', 'كمثرى', 'مشمش', 'كرز', 'برقوق', 'مكسرات',
    'لوز', 'فستق', 'بندق', 'جوز', 'كستناء', 'قهوة', 'شاي', 'عصير', 'ماء', 'حليب',
    'لبن', 'جبن', 'زبدة', 'خبز', 'أرز', 'معكرونة', 'بيتزا', 'سندويتش', 'برجر', 'لحم',
    'دجاج', 'سمك', 'بيض', 'ملح', 'سكر', 'فلفل', 'زيت', 'خل', 'عسل', 'مربى',
    'شوربة', 'طحين', 'فطور', 'غداء', 'عشاء', 'طبخ', 'خبز', 'طعام', 'مطبخ', 'قلم',
    'ورقة', 'دفتر', 'كتاب', 'مكتبة', 'كمبيوتر', 'لابتوب', 'شاشة', 'طابعة', 'ماوس', 'كيبورد',
    'مكتب', 'كرسي', 'طاولة', 'مخزن', 'خزانة', 'حقيبة', 'مفتاح', 'قفل', 'باب', 'نافذة',
    'مكيف', 'مروحة', 'ثلاجة', 'غسالة', 'ميكروويف', 'فرن', 'غلاية', 'خلاط', 'جهاز', 'ساعة',
    'هاتف', 'شاحن', 'سماعة', 'مستشفى', 'مدرسة', 'جامعة', 'حديقة', 'مزرعة', 'مبنى', 'عمارة',
    'شقة', 'فيلا', 'قصر', 'كوخ', 'خيمة', 'بستان', 'حديقة', 'غابة', 'صحراء', 'جبل',
    'وادي', 'نهر', 'بحيرة', 'محيط', 'شاطئ', 'جزيرة', 'رمل', 'صخرة', 'نبات', 'شجرة',
    'زهرة', 'عشب', 'نخلة', 'تمر', 'رمان', 'ليمون', 'برتقال', 'عنب', 'تفاح', 'موز',
    'كيوي', 'مانجو', 'أناناس', 'فراولة', 'توت', 'شمام', 'بطيخ', 'خوخ', 'كمثرى', 'مشمش',
    'كرز', 'برقوق', 'مكسرات', 'لوز', 'فستق', 'بندق', 'جوز', 'كستناء', 'قهوة', 'شاي',
    'عصير', 'ماء', 'حليب', 'لبن', 'جبن', 'زبدة', 'خبز', 'أرز', 'معكرونة', 'بيتزا',
    'سندويتش', 'برجر', 'لحم', 'دجاج', 'سمك', 'بيض', 'ملح', 'سكر', 'فلفل', 'زيت',
    'خل', 'عسل', 'مربى', 'شوربة', 'طحين', 'فطور', 'غداء', 'عشاء', 'طبخ', 'خبز',
    'طعام', 'مطبخ', 'قلم', 'ورقة', 'دفتر', 'كتاب', 'مكتبة', 'كمبيوتر', 'لابتوب', 'شاشة',
    'طابعة', 'ماوس', 'كيبورد', 'مكتب', 'كرسي', 'طاولة', 'مخزن', 'خزانة', 'حقيبة', 'مفتاح',
    'قفل', 'باب', 'نافذة', 'مكيف', 'مروحة', 'ثلاجة', 'غسالة', 'ميكروويف', 'فرن', 'غلاية',
    'خلاط', 'جهاز', 'ساعة', 'هاتف', 'شاحن', 'سماعة', 'مستشفى', 'مدرسة', 'جامعة', 'حديقة',
    'مزرعة', 'مبنى', 'عمارة', 'شقة', 'فيلا', 'قصر', 'كوخ', 'خيمة', 'بستان', 'غابة',
    'صحراء', 'جبل', 'وادي', 'نهر', 'بحيرة', 'محيط', 'شاطئ', 'جزيرة', 'رمل', 'صخرة',
    'نبات', 'شجرة', 'زهرة', 'عشب', 'نخلة', 'تمر', 'رمان', 'ليمون', 'برتقال', 'عنب',
    'تفاح', 'موز', 'كيوي', 'مانجو', 'أناناس', 'فراولة', 'توت', 'شمام', 'بطيخ', 'خوخ',
    'كمثرى', 'مشمش', 'كرز', 'برقوق', 'مكسرات', 'لوز', 'فستق', 'بندق', 'جوز', 'كستناء',
    'قهوة', 'شاي', 'عصير', 'ماء', 'حليب', 'لبن', 'جبن', 'زبدة', 'خبز', 'أرز',
    'معكرونة', 'بيتزا', 'سندويتش', 'برجر', 'لحم', 'دجاج', 'سمك', 'بيض', 'ملح', 'سكر',
    'فلفل', 'زيت', 'خل', 'عسل', 'مربى', 'شوربة', 'طحين', 'فطور', 'غداء', 'عشاء',
    'طبخ', 'خبز', 'طعام', 'مطبخ', 'قلم', 'ورقة', 'دفتر', 'كتاب', 'مكتبة', 'كمبيوتر',
    'لابتوب', 'شاشة', 'طابعة', 'ماوس', 'كيبورد', 'مكتب', 'كرسي',
    'قرد', 'كتاب', 'مكتب', 'سيارة', 'مستشفى', 'مدرسة', 'جامعة', 'كمبيوتر', 'هاتف', 'شاشة',
    'نافذة', 'باب', 'مفتاح', 'زهرة', 'قلم', 'ورقة', 'كرسي', 'طاولة', 'ثلاجة', 'غسالة',
    'مروحة', 'مكيف', 'سماعة', 'جهاز', 'ساعة', 'حقيبة', 'خزانة', 'شمعة', 'مصباح', 'تلفاز',
    'راديو', 'جريدة', 'مجلة', 'قهوة', 'شاي', 'عصير', 'ماء', 'حليب', 'تفاحة', 'موز',
    'برتقال', 'ليمون', 'عنب', 'فراولة', 'بطيخ', 'شمام', 'رمان', 'كيوي', 'مانجو', 'أناناس',
    'كمثرى', 'خوخ', 'مشمش', 'كرز', 'توت', 'برقوق', 'بندق', 'لوز', 'جوز', 'فستق',
    'كستناء', 'سمك', 'دجاج', 'لحم', 'أرز', 'خبز', 'زبدة', 'جبن', 'بيض', 'ملح',
    'سكر', 'فلفل', 'زيت', 'خل', 'عسل', 'مربى', 'طحين', 'شوربة', 'معكرونة', 'بيتزا',
    'سندويتش', 'برجر', 'سلطة', 'فطور', 'غداء', 'عشاء', 'طبخ', 'خبز', 'طعام', 'مطبخ'
];

let chosenWord = '';
let displayedWord = '';
let attemptsLeft = 6;
let guessedLetters = [];
let correctGuesses = 0;
let helpCounter = 3;
let levelsPassed = 0;
let helpUsed = false;
let currentStage = 1;
let score = 0;

function startGame(resetScore = false) {
    attemptsLeft = 6;
    guessedLetters = [];
    correctGuesses = 0;
    helpUsed = false;
    chosenWord = words[Math.floor(Math.random() * words.length)];
    displayedWord = '_ '.repeat(chosenWord.length).trim();
    document.getElementById('wordDisplay').innerText = displayedWord;
    document.getElementById('attemptsLeft').innerText = attemptsLeft;
    document.getElementById('message').innerText = '';
    document.getElementById('guessInput').value = '';
    document.getElementById('stageDisplay').innerText = `مرحلة رقم ${currentStage}`;
    
    if (resetScore) {
        score = 0;
    }
    
    document.getElementById('score').innerText = score;
    updateHangmanImage();
    generateLetters();
    updateHelpButton();
}

function generateLetters() {
    const lettersContainer = document.getElementById('lettersContainer');
    lettersContainer.innerHTML = '';
    const letters = 'أبتثجحخدذرزسشصضطظعغفقكلمنهويءؤىةا'.split('');
    letters.forEach(letter => {
        const letterElement = document.createElement('div');
        letterElement.classList.add('letter');
        letterElement.innerText = letter;
        letterElement.onclick = () => {
            document.getElementById('guessInput').value = letter;
            makeGuess();
        };
        lettersContainer.appendChild(letterElement);
    });
}

function makeGuess() {
    if (attemptsLeft === 0) {
        document.getElementById('message').innerText = 'أسف . لقد أستنفذت جميع محاولاتك ، حاول مرة أخرى';
        return;
    }

    const guessInput = document.getElementById('guessInput');
    const guess = guessInput.value.trim();
    guessInput.value = '';

    if (!guess || guessedLetters.includes(guess)) {
        return;
    }

    guessedLetters.push(guess);

    if (chosenWord.includes(guess)) {
        let newDisplayedWord = '';
        for (let i = 0; i < chosenWord.length; i++) {
            if (guessedLetters.includes(chosenWord[i])) {
                newDisplayedWord += chosenWord[i] + ' ';
            } else {
                newDisplayedWord += '_ ';
            }
        }
        displayedWord = newDisplayedWord.trim();
        document.getElementById('wordDisplay').innerText = displayedWord;

        document.querySelectorAll('.letter').forEach(letterElement => {
            if (letterElement.innerText === guess) {
                letterElement.classList.add('correct');
            }
        });

        correctGuesses += chosenWord.split(guess).length - 1;
        score += 10;  // Increase score by 10 for each correct letter guessed
        document.getElementById('score').innerText = score;  // Update score display

        if (!displayedWord.includes('_')) {
            document.getElementById('message').innerText = `مبروك! لقد خمنت الكلمة بشكل صحيح! درجاتك: ${score}`;
            levelsPassed++;
            currentStage++;
            startGame();
            if (helpUsed) {
                levelsPassed = 0;
                helpUsed = false;
            }
            updateHelpButton();
        }
    } else {
        attemptsLeft--;
        document.getElementById('attemptsLeft').innerText = attemptsLeft;
        document.querySelectorAll('.letter').forEach(letterElement => {
            if (letterElement.innerText === guess) {
                letterElement.classList.add('incorrect');
            }
        });
        updateHangmanImage();
        if (attemptsLeft === 0) {
            document.getElementById('message').innerText = `للأسف! لقد خسرت. الكلمة كانت: ${chosenWord}. درجاتك: ${score}`;
            levelsPassed = 0;
            updateHelpButton();
        }
    }
}

function useHelp() {
    if (helpCounter > 0) {
        const hiddenLetters = chosenWord.split('').filter(letter => !guessedLetters.includes(letter));
        if (hiddenLetters.length > 0) {
            const randomLetter = hiddenLetters[Math.floor(Math.random() * hiddenLetters.length)];
            guessedLetters.push(randomLetter);
            correctGuesses++;
            document.querySelectorAll('.letter').forEach(letterElement => {
                if (letterElement.innerText === randomLetter) {
                    letterElement.classList.add('helped');
                }
            });
            revealLetter(randomLetter);
        }
        helpCounter--;
        document.getElementById('helpCounter').innerText = helpCounter;
        helpUsed = true;
        updateHelpButton();
    }
}

function revealLetter(letter) {
    let newDisplayedWord = '';
    for (let i = 0; i < chosenWord.length; i++) {
        if (guessedLetters.includes(chosenWord[i])) {
            newDisplayedWord += chosenWord[i] + ' ';
        } else {
            newDisplayedWord += '_ ';
        }
    }
    displayedWord = newDisplayedWord.trim();
    document.getElementById('wordDisplay').innerText = displayedWord;
}

function updateHelpButton() {
    const helpButton = document.getElementById('helpButton');
    if (helpUsed || helpCounter === 0) {
        helpButton.disabled = true;
    } else {
        helpButton.disabled = false;
    }
    document.getElementById('helpCounter').innerText = helpCounter;
}

function updateHangmanImage() {
    const hangmanImage = document.getElementById('hangman');
    switch (attemptsLeft) {
        case 6:
            hangmanImage.src = 'images/ولد خائف.png';
            break;
        case 5:
            hangmanImage.src = 'images/ولدقلق.png';
            break;
        case 4:
            hangmanImage.src = 'images/ولد صامت.png';
            break;
        case 3:
            hangmanImage.src = 'images/ولد يضحك.png';
            break;
        case 2:
            hangmanImage.src = 'images/يتمسخر.png';
            break;
        case 1:
            hangmanImage.src = 'images/حقير.png';
            break;
        default:
            hangmanImage.src = 'images/حقير.png';

    }
}

document.getElementById('startNewGameButton').addEventListener('click', () => startGame(true));

startGame();
