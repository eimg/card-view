# Card View
Mobile App များအတွက် Card View Layout သတ်မှတ်နိုင်သည့် Front-End Framework တစ်ခုဖြစ်ပါသည်။ သတ်မှတ်လိုသည့် Card များနှင့်အတူ Toolbar နှင့် Slide Menu တို့ကို HTML Markup သက်သက်ဖြင့် အလွယ်တစ်ကူ တည်ဆောက်နိုင်ရန် အကူအညီပေးမည့် Framework ဖြစ်ပါသည်။

အနာဂါတ်တွင် Tablet Screen အတွက် ဖြည့်စွက်ချက်များ၊ Ajax Load ဆောင်ရွက်ချက်များ၊ ပိုမိုကောင်းမွန်သည့် Accessibility လုပ်ဆောင်ချက်များ၊ Visual Feedback များနှင့် အခြားဖြည့်စွက်လုပ်ဆောင်ချက်များ ဆက်လက်ထည့်သွင်းသွားမည် ဖြစ်ပါသည်။

## Setup Base Card Flow
<code>.wrap</code> Class သတ်မှတ်ထားသည့် Element အတွင်းတွင် သတ်မှတ်လိုသည့် Card များအား <code>.card</code> Class ဖြင့် တန်းစီထည့်သွင်းနိုင်ပါသည်။
<pre>
	&lt;div class="wrap"&gt;
		&lt;div class="card" id="card-one"&gt;&lt;/div&gt;
		&lt;div class="card" id="card-two"&gt;&lt;/div&gt;
		&lt;div class="card" id="card-three"&gt;&lt;/div&gt;
	&lt;/div&gt;
</pre>

### Setup Card Navigation
<code>.nav</code> Class သတ်မှတ်ထားသည့် Link Element များကို Card Navigation အဖြစ် အသုံးပြုနိုင်ပါသည်။ Link ကို နှိပ်လိုက်သည့်အခါ ဖော်ပြစေလိုသည့် Card ၏ ID ကို href တွင် သတ်မှတ်ပေးရပါသည်။
<pre>
	&lt;a href="#card-one" class="nav"&gt;Card One&lt;/a&gt;
	&lt;a href="#card-two" class="nav"&gt;Card Two&lt;/a&gt;
	&lt;a href="#card-three" class="nav"&gt;Card Three&lt;/a&gt;
</pre>

### Set Default Card
Card တွင် <code>.active</code> Class သတ်မှတ်ထားပါက၊ အဆိုပါ Card ကို အလိုအလျှောက် ဦးဆုံးဖော်ပြပေးမည် ဖြစ်ပါသည်။
<pre>
	&lt;div class="wrap"&gt;
		&lt;div class="card" id="card-one"&gt;&lt;/div&gt;
		&lt;div class="card <b>active<b>" id="card-two"&gt;&lt;/div&gt;
		&lt;div class="card" id="card-three"&gt;&lt;/div&gt;
	&lt;/div&gt;
</pre>

## Setup Inner Card Flow
Card တစ်ခုအတွင်းတွင် နောက်ထပ် Card Flow တစ်ဆင့် ထပ်မံထည့်သွင်းနိုင်ပါသည်။ <code>.inner</code> Class သတ်မှတ်ထားသည့် Element အတွင်းတွင် <code>.card</code> များကို ထပ်ဆင့်ထည့်သွင်းရပါသည်။
<pre>
	&lt;div class="wrap"&gt;
		&lt;div class="card" id="card-one"&gt;
			&lt;div class="inner"&gt;
				&lt;div class="card" id="inner-one"&gt;&lt;/div&gt;
				&lt;div class="card" id="inner-two"&gt;&lt;/div&gt;
			&lt;/div&gt;
		&lt;/div&gt;
	&lt;/div&gt;
</pre>

### Setup Inner Card Navigation
Inner Card Flow အတွက် Navigation ကို <code>.slide</code> Class သတ်မှတ်ထားသည့် Link များဖြင့် သတ်မှတ်အသုံးပြုနိုင် ပါသည်။
<pre>
	&lt;a href="#inner-one" class="slide"&gt;Inner One&lt;/a&gt;
	&lt;a href="#inner-two" class="slide"&gt;Inner Two&lt;/a&gt;
</pre>

## Setup Card Flip
Flip Effect ထည့်သွင်းရန် <code>.card</code> Element တွင် <code>.flip</code> Class ကို ထပ်မံထည့်သွင်းပေရပါသည်။ ထို့နောက် <code>.front</code> နှင့် <code>.back</code> ကိုယ်စီသတ်မှတ်ထားသည့် Element တစ်စုံထပ်မံထည့်သွင်းပေးခြင်းအားဖြင့် အဆိုပါ <code>.front</code> နှင့် <code>.back</code> ကို အပြန်အလှန် Flip လုပ်နိုင်စေမည်ဖြစ်ပါသည်။
<pre>
	&lt;div class="wrap"&gt;
		&lt;div class="card flip" id="card-one"&gt;
			&lt;div class="front"&gt;&lt;/div&gt;
			&lt;div class="back"&gt;&lt;/div&gt;
		&lt;/div&gt;
	&lt;/div&gt;
</pre>

### Setup Card Flip Toggle
Flip Effect ထည့်သွင်းထားသည့် Element အတွက် Toggle Button ကို <code>.toggle-flip</code> Class သတ်မှတ်ထားသည့် Link ဖြင့် သတ်မှတ်ထည့်သွင်းနိုင်ပါသည်။ <code>href</code> တွင် Flip လုပ်စေလိုသည့် Element ID ကို ထည့်သွင်းပေးရပါသည်။
<pre>
	&lt;a href="#card-one" class="toggle-flip"&gt;Flip Card One&lt;/a&gt;
</pre>

## Setup Sticky Toolbar
Toolbar တစ်ခုထည့်သွင်းရန် <code>.toolbar</code> Class သတ်မှတ်ထားသည့် Element ကို အသုံးပြုနိုင်ပါသည်။ Toolbar ၏ Location အား <code>.top</code> သို့မဟုတ် <code>.bottom</code> Class အသုံးပြုသတ်မှတ်နိုင်ပါသည်။ Toolbar ကို Screen တွင်အမြဲဖော်ပြစေလိုလျှင် <code>.sticky</code> Class ထည့်သွင်းပေးရပါသည်။
<pre>
&lt;div class="toolbar sticky top"&gt;&lt;/div&gt;
</pre>

## Setup Slide-Menu
Slide Menu ထည့်သွင်းရန် <code>.menu</code> Class သတ်မှတ်ထားသည့် Element ကို အသုံးပြုနိုင်ပါသည်။ Menu တစ်ခုထက် ပို၍ ထည့်သွင်းနိုင်သည်။ Menu ၏ Location ကို <code>.left</code> သို့မဟုတ် <code>.right</code> Class များဖြင့် သတ်မှတ်ပေးနိုင်ပါသည်။
<pre>
&lt;div class="menu left" id="menu-one"&gt;
	&lt;a href="#" class="close-menu"&gt;Close&lt;/a&gt;
&lt;/div&gt;
</pre>

## Setup View Menu Button
Menu ဖော်ပြစေမည့် Button အဖြစ် <code>.menu-trigger</code> Class သတ်မှတ်ထားသည့် Link Element ကို အသုံးပြုနိုင်သည်။ <code>href</code> တွင် ဖော်ပြစေလိုသည့် Menu ၏ ID ကို သတ်မှတ်ပေးရပါသည်။
<pre>
&lt;a href="#menu-one" class="menu-trigger"&gt;Menu&lt;/a&gt;
</pre>

## Demo
&lt;a href="http://eimaung.com/card-view/"&gt;http://eimaung.com/card-view/&lt;/a&gt;

