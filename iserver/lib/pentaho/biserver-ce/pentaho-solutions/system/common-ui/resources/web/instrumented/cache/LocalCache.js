/* automatically generated by JSCoverage - do not edit */
try {
  if (typeof top === 'object' && top !== null && typeof top.opener === 'object' && top.opener !== null) {
    // this is a browser window that was opened from another window

    if (! top.opener._$jscoverage) {
      top.opener._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null) {
    // this is a browser window

    try {
      if (typeof top.opener === 'object' && top.opener !== null && top.opener._$jscoverage) {
        top._$jscoverage = top.opener._$jscoverage;
      }
    }
    catch (e) {}

    if (! top._$jscoverage) {
      top._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null && top._$jscoverage) {
    _$jscoverage = top._$jscoverage;
  }
}
catch (e) {}
if (typeof _$jscoverage !== 'object') {
  _$jscoverage = {};
}
if (! _$jscoverage['cache/LocalCache.js']) {
  _$jscoverage['cache/LocalCache.js'] = [];
  _$jscoverage['cache/LocalCache.js'][1] = 0;
  _$jscoverage['cache/LocalCache.js'][2] = 0;
  _$jscoverage['cache/LocalCache.js'][4] = 0;
  _$jscoverage['cache/LocalCache.js'][6] = 0;
  _$jscoverage['cache/LocalCache.js'][12] = 0;
  _$jscoverage['cache/LocalCache.js'][13] = 0;
  _$jscoverage['cache/LocalCache.js'][14] = 0;
  _$jscoverage['cache/LocalCache.js'][15] = 0;
  _$jscoverage['cache/LocalCache.js'][16] = 0;
  _$jscoverage['cache/LocalCache.js'][18] = 0;
  _$jscoverage['cache/LocalCache.js'][21] = 0;
  _$jscoverage['cache/LocalCache.js'][30] = 0;
  _$jscoverage['cache/LocalCache.js'][34] = 0;
  _$jscoverage['cache/LocalCache.js'][35] = 0;
  _$jscoverage['cache/LocalCache.js'][36] = 0;
  _$jscoverage['cache/LocalCache.js'][37] = 0;
  _$jscoverage['cache/LocalCache.js'][38] = 0;
  _$jscoverage['cache/LocalCache.js'][39] = 0;
  _$jscoverage['cache/LocalCache.js'][41] = 0;
  _$jscoverage['cache/LocalCache.js'][42] = 0;
  _$jscoverage['cache/LocalCache.js'][47] = 0;
  _$jscoverage['cache/LocalCache.js'][52] = 0;
  _$jscoverage['cache/LocalCache.js'][57] = 0;
  _$jscoverage['cache/LocalCache.js'][58] = 0;
  _$jscoverage['cache/LocalCache.js'][59] = 0;
  _$jscoverage['cache/LocalCache.js'][60] = 0;
  _$jscoverage['cache/LocalCache.js'][61] = 0;
  _$jscoverage['cache/LocalCache.js'][62] = 0;
  _$jscoverage['cache/LocalCache.js'][65] = 0;
  _$jscoverage['cache/LocalCache.js'][70] = 0;
  _$jscoverage['cache/LocalCache.js'][71] = 0;
  _$jscoverage['cache/LocalCache.js'][72] = 0;
  _$jscoverage['cache/LocalCache.js'][73] = 0;
  _$jscoverage['cache/LocalCache.js'][74] = 0;
  _$jscoverage['cache/LocalCache.js'][75] = 0;
  _$jscoverage['cache/LocalCache.js'][76] = 0;
  _$jscoverage['cache/LocalCache.js'][78] = 0;
  _$jscoverage['cache/LocalCache.js'][85] = 0;
  _$jscoverage['cache/LocalCache.js'][86] = 0;
  _$jscoverage['cache/LocalCache.js'][87] = 0;
  _$jscoverage['cache/LocalCache.js'][88] = 0;
  _$jscoverage['cache/LocalCache.js'][89] = 0;
  _$jscoverage['cache/LocalCache.js'][91] = 0;
  _$jscoverage['cache/LocalCache.js'][96] = 0;
  _$jscoverage['cache/LocalCache.js'][101] = 0;
  _$jscoverage['cache/LocalCache.js'][102] = 0;
  _$jscoverage['cache/LocalCache.js'][103] = 0;
  _$jscoverage['cache/LocalCache.js'][108] = 0;
  _$jscoverage['cache/LocalCache.js'][109] = 0;
  _$jscoverage['cache/LocalCache.js'][110] = 0;
  _$jscoverage['cache/LocalCache.js'][113] = 0;
  _$jscoverage['cache/LocalCache.js'][114] = 0;
  _$jscoverage['cache/LocalCache.js'][115] = 0;
  _$jscoverage['cache/LocalCache.js'][117] = 0;
  _$jscoverage['cache/LocalCache.js'][120] = 0;
  _$jscoverage['cache/LocalCache.js'][121] = 0;
  _$jscoverage['cache/LocalCache.js'][122] = 0;
  _$jscoverage['cache/LocalCache.js'][123] = 0;
  _$jscoverage['cache/LocalCache.js'][139] = 0;
  _$jscoverage['cache/LocalCache.js'][140] = 0;
  _$jscoverage['cache/LocalCache.js'][141] = 0;
  _$jscoverage['cache/LocalCache.js'][142] = 0;
}
_$jscoverage['cache/LocalCache.js'].source = ["pentaho <span class=\"k\">=</span> <span class=\"k\">typeof</span> pentaho <span class=\"k\">==</span> <span class=\"s\">\"undefined\"</span> <span class=\"k\">?</span> <span class=\"k\">{}</span> <span class=\"k\">:</span> pentaho<span class=\"k\">;</span>","pentaho<span class=\"k\">.</span>common <span class=\"k\">=</span> pentaho<span class=\"k\">.</span>common <span class=\"k\">||</span> <span class=\"k\">{}</span><span class=\"k\">;</span>","","dojo<span class=\"k\">.</span>require<span class=\"k\">(</span><span class=\"s\">\"dojox.storage\"</span><span class=\"k\">);</span>","","pentaho<span class=\"k\">.</span>common<span class=\"k\">.</span>localcache <span class=\"k\">=</span> <span class=\"k\">{</span>","  keyRegex <span class=\"k\">:</span> <span class=\"k\">new</span> RegExp<span class=\"k\">(</span><span class=\"s\">\"[-</span><span class=\"t\">\\\\</span><span class=\"s\">.]\"</span><span class=\"k\">,</span> <span class=\"s\">\"gi\"</span><span class=\"k\">),</span>","  cacheHasBeenRefreshed <span class=\"k\">:</span> <span class=\"k\">false</span><span class=\"k\">,</span>","  lmMap<span class=\"k\">:</span> <span class=\"k\">{}</span><span class=\"k\">,</span>","","  isAvailable <span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">()</span> <span class=\"k\">{</span>","    <span class=\"k\">if</span><span class=\"k\">(</span>dojox<span class=\"k\">.</span>storage<span class=\"k\">.</span>isAvailable<span class=\"k\">())</span> <span class=\"k\">{</span>","      <span class=\"k\">if</span> <span class=\"k\">(</span>dojox<span class=\"k\">.</span>storage<span class=\"k\">.</span>manager<span class=\"k\">.</span>getProvider<span class=\"k\">().</span>declaredClass <span class=\"k\">==</span> <span class=\"s\">\"dojox.storage.FlashStorageProvider\"</span><span class=\"k\">)</span> <span class=\"k\">{</span>","        <span class=\"k\">var</span> installer <span class=\"k\">=</span> <span class=\"k\">new</span> dojox<span class=\"k\">.</span>flash<span class=\"k\">.</span>Install<span class=\"k\">();</span>","        <span class=\"k\">var</span> available <span class=\"k\">=</span> <span class=\"k\">!</span>installer<span class=\"k\">.</span>needed<span class=\"k\">();</span>","        <span class=\"k\">return</span> available<span class=\"k\">;</span>","      <span class=\"k\">}</span> <span class=\"k\">else</span> <span class=\"k\">{</span>","        <span class=\"k\">return</span> <span class=\"k\">true</span><span class=\"k\">;</span>","      <span class=\"k\">}</span>","    <span class=\"k\">}</span>","    <span class=\"k\">return</span> <span class=\"k\">false</span><span class=\"k\">;</span>","  <span class=\"k\">}</span><span class=\"k\">,</span>","","  <span class=\"c\">/**</span>","<span class=\"c\">   * Local storage providers don't support certain characters in key names.</span>","<span class=\"c\">   * This method will strip out any unsupportted characters and make a friendly key by swapping in an underscore.</span>","<span class=\"c\">   * @param key desired key name</span>","<span class=\"c\">   */</span>","  getCacheKey <span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">(</span>key<span class=\"k\">)</span> <span class=\"k\">{</span>","    <span class=\"k\">return</span> key<span class=\"k\">.</span>replace<span class=\"k\">(</span> <span class=\"k\">this</span><span class=\"k\">.</span>keyRegex<span class=\"k\">,</span> <span class=\"s\">\"_\"</span> <span class=\"k\">);</span>","  <span class=\"k\">}</span><span class=\"k\">,</span>","","  putValue <span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">(</span>key<span class=\"k\">,</span> value<span class=\"k\">,</span> lastModified<span class=\"k\">)</span> <span class=\"k\">{</span>","    <span class=\"k\">if</span><span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>isAvailable<span class=\"k\">())</span> <span class=\"k\">{</span>","      <span class=\"k\">this</span><span class=\"k\">.</span>refreshCacheExirations<span class=\"k\">();</span>","      key <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">.</span>getCacheKey<span class=\"k\">(</span>key<span class=\"k\">);</span>","      <span class=\"k\">var</span> cacheLastModified <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">.</span>getLastModified<span class=\"k\">(</span>key<span class=\"k\">);</span>","      <span class=\"k\">if</span><span class=\"k\">(</span><span class=\"k\">typeof</span><span class=\"k\">(</span>lastModified<span class=\"k\">)</span> <span class=\"k\">==</span> <span class=\"s\">'undefined'</span><span class=\"k\">)</span> <span class=\"k\">{</span>","        lastModified <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">.</span>lmMap<span class=\"k\">[</span>key<span class=\"k\">];</span>","      <span class=\"k\">}</span>","      <span class=\"k\">if</span><span class=\"k\">(</span>cacheLastModified <span class=\"k\">==</span> <span class=\"k\">null</span><span class=\"k\">)</span> <span class=\"k\">{</span>","        <span class=\"k\">var</span> cachedObj <span class=\"k\">=</span> <span class=\"k\">{</span>","          lastModified<span class=\"k\">:</span> <span class=\"k\">(</span><span class=\"k\">typeof</span><span class=\"k\">(</span>lastModified<span class=\"k\">)</span> <span class=\"k\">==</span> <span class=\"s\">'undefined'</span> <span class=\"k\">?</span> <span class=\"s\">0</span> <span class=\"k\">:</span> lastModified<span class=\"k\">),</span>","          value<span class=\"k\">:</span> value","        <span class=\"k\">}</span>","      <span class=\"k\">}</span> <span class=\"k\">else</span> <span class=\"k\">{</span>","        <span class=\"k\">var</span> cachedObj <span class=\"k\">=</span> <span class=\"k\">{</span>","          lastModified<span class=\"k\">:</span> <span class=\"k\">(</span><span class=\"k\">typeof</span><span class=\"k\">(</span>lastModified<span class=\"k\">)</span> <span class=\"k\">==</span> <span class=\"s\">'undefined'</span> <span class=\"k\">?</span> cacheLastModified <span class=\"k\">:</span> lastModified<span class=\"k\">),</span>","          value<span class=\"k\">:</span> value","        <span class=\"k\">}</span>","      <span class=\"k\">}</span>","      dojox<span class=\"k\">.</span>storage<span class=\"k\">.</span>put<span class=\"k\">(</span>key<span class=\"k\">,</span> cachedObj<span class=\"k\">);</span>","    <span class=\"k\">}</span>","  <span class=\"k\">}</span><span class=\"k\">,</span>","","  getValue <span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">(</span>key<span class=\"k\">)</span> <span class=\"k\">{</span>","    <span class=\"k\">if</span><span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>isAvailable<span class=\"k\">())</span> <span class=\"k\">{</span>","      <span class=\"k\">this</span><span class=\"k\">.</span>refreshCacheExirations<span class=\"k\">();</span>","      key <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">.</span>getCacheKey<span class=\"k\">(</span>key<span class=\"k\">);</span>","      <span class=\"k\">var</span> cachedObj <span class=\"k\">=</span> dojox<span class=\"k\">.</span>storage<span class=\"k\">.</span>get<span class=\"k\">(</span>key<span class=\"k\">);</span>","      <span class=\"k\">if</span><span class=\"k\">(</span>cachedObj <span class=\"k\">!=</span> <span class=\"k\">null</span><span class=\"k\">)</span> <span class=\"k\">{</span>","        <span class=\"k\">return</span> cachedObj<span class=\"k\">.</span>value<span class=\"k\">;</span>","      <span class=\"k\">}</span>","    <span class=\"k\">}</span>","    <span class=\"k\">return</span> <span class=\"k\">null</span><span class=\"k\">;</span>","  <span class=\"k\">}</span><span class=\"k\">,</span>","","  getLastModified <span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">(</span>key<span class=\"k\">)</span> <span class=\"k\">{</span>","    <span class=\"c\">// lookup the last modified value from the local storage cache</span>","    <span class=\"k\">if</span><span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>isAvailable<span class=\"k\">())</span> <span class=\"k\">{</span>","      <span class=\"k\">this</span><span class=\"k\">.</span>refreshCacheExirations<span class=\"k\">();</span>","      key <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">.</span>getCacheKey<span class=\"k\">(</span>key<span class=\"k\">);</span>","      <span class=\"k\">var</span> cachedObj <span class=\"k\">=</span> dojox<span class=\"k\">.</span>storage<span class=\"k\">.</span>get<span class=\"k\">(</span>key<span class=\"k\">);</span>","      <span class=\"k\">if</span><span class=\"k\">(</span>cachedObj <span class=\"k\">!=</span> <span class=\"k\">null</span><span class=\"k\">)</span> <span class=\"k\">{</span>","        <span class=\"k\">var</span> lastMod <span class=\"k\">=</span> cachedObj<span class=\"k\">.</span>lastModified<span class=\"k\">;</span>","        <span class=\"k\">return</span> lastMod<span class=\"k\">;</span>","      <span class=\"k\">}</span> <span class=\"k\">else</span> <span class=\"k\">{</span>","        <span class=\"k\">return</span> <span class=\"k\">null</span><span class=\"k\">;</span>","      <span class=\"k\">}</span>","    <span class=\"k\">}</span>","","  <span class=\"k\">}</span><span class=\"k\">,</span>","","  setLastModified <span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">(</span>key<span class=\"k\">,</span> lastModified<span class=\"k\">)</span> <span class=\"k\">{</span>","    <span class=\"k\">if</span><span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>isAvailable<span class=\"k\">())</span> <span class=\"k\">{</span>","      key <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">.</span>getCacheKey<span class=\"k\">(</span>key<span class=\"k\">);</span>","      <span class=\"k\">var</span> cachedObj <span class=\"k\">=</span> dojox<span class=\"k\">.</span>storage<span class=\"k\">.</span>get<span class=\"k\">(</span>key<span class=\"k\">);</span>","      <span class=\"k\">if</span><span class=\"k\">(</span>cachedObj <span class=\"k\">!=</span> <span class=\"k\">null</span><span class=\"k\">)</span> <span class=\"k\">{</span>","        cachedObj<span class=\"k\">.</span>lastModified <span class=\"k\">=</span> lastModified<span class=\"k\">;</span>","      <span class=\"k\">}</span> <span class=\"k\">else</span> <span class=\"k\">{</span>","        cachedObj <span class=\"k\">=</span> <span class=\"k\">{</span>","          lastModified<span class=\"k\">:</span> lastModified<span class=\"k\">,</span>","          value<span class=\"k\">:</span> <span class=\"k\">null</span>","        <span class=\"k\">}</span>","      <span class=\"k\">}</span>","      dojox<span class=\"k\">.</span>storage<span class=\"k\">.</span>put<span class=\"k\">(</span>key<span class=\"k\">,</span> cachedObj<span class=\"k\">);</span>","    <span class=\"k\">}</span>","  <span class=\"k\">}</span><span class=\"k\">,</span>","","  clear <span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">(</span>key<span class=\"k\">)</span> <span class=\"k\">{</span>","    <span class=\"k\">if</span><span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>isAvailable<span class=\"k\">())</span> <span class=\"k\">{</span>","      key <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">.</span>getCacheKey<span class=\"k\">(</span>key<span class=\"k\">);</span>","      dojox<span class=\"k\">.</span>storage<span class=\"k\">.</span>remove<span class=\"k\">(</span>key<span class=\"k\">);</span>","    <span class=\"k\">}</span>","  <span class=\"k\">}</span><span class=\"k\">,</span>","","  updateCacheExpiration <span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">(</span>response<span class=\"k\">)</span> <span class=\"k\">{</span>","    <span class=\"k\">this</span><span class=\"k\">.</span>lmMap <span class=\"k\">=</span> <span class=\"k\">{}</span><span class=\"k\">;</span>","    <span class=\"k\">var</span> lm <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">.</span>lmMap<span class=\"k\">;</span>","    $<span class=\"k\">(</span>response<span class=\"k\">)</span>","      <span class=\"k\">.</span>find<span class=\"k\">(</span><span class=\"s\">'cache-item'</span><span class=\"k\">)</span>","      <span class=\"k\">.</span>each<span class=\"k\">(</span><span class=\"k\">function</span><span class=\"k\">()</span> <span class=\"k\">{</span>","        <span class=\"k\">var</span> key <span class=\"k\">=</span> $<span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">).</span>find<span class=\"k\">(</span><span class=\"s\">'key'</span><span class=\"k\">).</span>text<span class=\"k\">();</span>","        key <span class=\"k\">=</span> pentaho<span class=\"k\">.</span>common<span class=\"k\">.</span>localcache<span class=\"k\">.</span>getCacheKey<span class=\"k\">(</span>key<span class=\"k\">);</span>","        <span class=\"k\">var</span> lastModified <span class=\"k\">=</span> $<span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">).</span>find<span class=\"k\">(</span><span class=\"s\">'last-modified'</span><span class=\"k\">).</span>text<span class=\"k\">();</span>","","        lm<span class=\"k\">[</span>key<span class=\"k\">]</span> <span class=\"k\">=</span> lastModified<span class=\"k\">;</span>","","        <span class=\"c\">//console.log(key + ' --&gt; ' + lastModified);</span>","        <span class=\"k\">var</span> cachedObj <span class=\"k\">=</span> pentaho<span class=\"k\">.</span>common<span class=\"k\">.</span>localcache<span class=\"k\">.</span>getValue<span class=\"k\">(</span>key<span class=\"k\">);</span>","        <span class=\"k\">if</span><span class=\"k\">(</span>cachedObj <span class=\"k\">!=</span> <span class=\"k\">null</span> <span class=\"k\">&amp;&amp;</span> pentaho<span class=\"k\">.</span>common<span class=\"k\">.</span>localcache<span class=\"k\">.</span>getLastModified<span class=\"k\">(</span>key<span class=\"k\">)</span> <span class=\"k\">&lt;</span> lastModified<span class=\"k\">)</span> <span class=\"k\">{</span>","          pentaho<span class=\"k\">.</span>common<span class=\"k\">.</span>localcache<span class=\"k\">.</span>clear<span class=\"k\">(</span>key<span class=\"k\">);</span>","          pentaho<span class=\"k\">.</span>common<span class=\"k\">.</span>localcache<span class=\"k\">.</span>setLastModified<span class=\"k\">(</span>key<span class=\"k\">,</span> lastModified<span class=\"k\">);</span>","        <span class=\"k\">}</span>","      <span class=\"k\">}</span><span class=\"k\">);</span>","  <span class=\"k\">}</span><span class=\"k\">,</span>","","<span class=\"c\">//  getCacheExpirations : function() {</span>","<span class=\"c\">//    try {</span>","<span class=\"c\">//      if(pentahoGet) {</span>","<span class=\"c\">//        var result = pentahoGet(CONTEXT_PATH + \"CacheExpirationService\", \"\", this.updateCacheExpiration);</span>","<span class=\"c\">//      }</span>","<span class=\"c\">//    } catch (e) {</span>","<span class=\"c\">//      // can't use pentahoGet...</span>","<span class=\"c\">//    }</span>","<span class=\"c\">//  },</span>","","  refreshCacheExirations <span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">()</span> <span class=\"k\">{</span>","    <span class=\"k\">if</span><span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>cacheHasBeenRefreshed <span class=\"k\">==</span> <span class=\"k\">false</span><span class=\"k\">)</span> <span class=\"k\">{</span>","      <span class=\"k\">if</span><span class=\"k\">(</span>window<span class=\"k\">.</span>pentahoCacheExpirationServiceResults <span class=\"k\">!=</span> <span class=\"s\">'undefined'</span> <span class=\"k\">&amp;&amp;</span> window<span class=\"k\">.</span>pentahoCacheExpirationServiceResults <span class=\"k\">!=</span> <span class=\"k\">null</span><span class=\"k\">)</span> <span class=\"k\">{</span>","        <span class=\"k\">this</span><span class=\"k\">.</span>cacheHasBeenRefreshed <span class=\"k\">=</span> <span class=\"k\">true</span><span class=\"k\">;</span>","        <span class=\"k\">this</span><span class=\"k\">.</span>updateCacheExpiration<span class=\"k\">(</span>window<span class=\"k\">.</span>pentahoCacheExpirationServiceResults<span class=\"k\">);</span>","      <span class=\"k\">}</span>","    <span class=\"k\">}</span>","  <span class=\"k\">}</span>","<span class=\"k\">}</span>",""];
_$jscoverage['cache/LocalCache.js'][1]++;
pentaho = (((typeof pentaho) == "undefined")? {}: pentaho);
_$jscoverage['cache/LocalCache.js'][2]++;
pentaho.common = (pentaho.common || {});
_$jscoverage['cache/LocalCache.js'][4]++;
dojo.require("dojox.storage");
_$jscoverage['cache/LocalCache.js'][6]++;
pentaho.common.localcache = {keyRegex: new RegExp("[-\\.]", "gi"), cacheHasBeenRefreshed: false, lmMap: {}, isAvailable: (function () {
  _$jscoverage['cache/LocalCache.js'][12]++;
  if (dojox.storage.isAvailable()) {
    _$jscoverage['cache/LocalCache.js'][13]++;
    if ((dojox.storage.manager.getProvider().declaredClass == "dojox.storage.FlashStorageProvider")) {
      _$jscoverage['cache/LocalCache.js'][14]++;
      var installer = new (dojox.flash.Install)();
      _$jscoverage['cache/LocalCache.js'][15]++;
      var available = (! installer.needed());
      _$jscoverage['cache/LocalCache.js'][16]++;
      return available;
    }
    else {
      _$jscoverage['cache/LocalCache.js'][18]++;
      return true;
    }
  }
  _$jscoverage['cache/LocalCache.js'][21]++;
  return false;
}), getCacheKey: (function (key) {
  _$jscoverage['cache/LocalCache.js'][30]++;
  return key.replace(this.keyRegex, "_");
}), putValue: (function (key, value, lastModified) {
  _$jscoverage['cache/LocalCache.js'][34]++;
  if (this.isAvailable()) {
    _$jscoverage['cache/LocalCache.js'][35]++;
    this.refreshCacheExirations();
    _$jscoverage['cache/LocalCache.js'][36]++;
    key = this.getCacheKey(key);
    _$jscoverage['cache/LocalCache.js'][37]++;
    var cacheLastModified = this.getLastModified(key);
    _$jscoverage['cache/LocalCache.js'][38]++;
    if (((typeof lastModified) == "undefined")) {
      _$jscoverage['cache/LocalCache.js'][39]++;
      lastModified = this.lmMap[key];
    }
    _$jscoverage['cache/LocalCache.js'][41]++;
    if ((cacheLastModified == null)) {
      _$jscoverage['cache/LocalCache.js'][42]++;
      var cachedObj = {lastModified: (((typeof lastModified) == "undefined")? 0: lastModified), value: value};
    }
    else {
      _$jscoverage['cache/LocalCache.js'][47]++;
      var cachedObj = {lastModified: (((typeof lastModified) == "undefined")? cacheLastModified: lastModified), value: value};
    }
    _$jscoverage['cache/LocalCache.js'][52]++;
    dojox.storage.put(key, cachedObj);
  }
}), getValue: (function (key) {
  _$jscoverage['cache/LocalCache.js'][57]++;
  if (this.isAvailable()) {
    _$jscoverage['cache/LocalCache.js'][58]++;
    this.refreshCacheExirations();
    _$jscoverage['cache/LocalCache.js'][59]++;
    key = this.getCacheKey(key);
    _$jscoverage['cache/LocalCache.js'][60]++;
    var cachedObj = dojox.storage.get(key);
    _$jscoverage['cache/LocalCache.js'][61]++;
    if ((cachedObj != null)) {
      _$jscoverage['cache/LocalCache.js'][62]++;
      return cachedObj.value;
    }
  }
  _$jscoverage['cache/LocalCache.js'][65]++;
  return null;
}), getLastModified: (function (key) {
  _$jscoverage['cache/LocalCache.js'][70]++;
  if (this.isAvailable()) {
    _$jscoverage['cache/LocalCache.js'][71]++;
    this.refreshCacheExirations();
    _$jscoverage['cache/LocalCache.js'][72]++;
    key = this.getCacheKey(key);
    _$jscoverage['cache/LocalCache.js'][73]++;
    var cachedObj = dojox.storage.get(key);
    _$jscoverage['cache/LocalCache.js'][74]++;
    if ((cachedObj != null)) {
      _$jscoverage['cache/LocalCache.js'][75]++;
      var lastMod = cachedObj.lastModified;
      _$jscoverage['cache/LocalCache.js'][76]++;
      return lastMod;
    }
    else {
      _$jscoverage['cache/LocalCache.js'][78]++;
      return null;
    }
  }
}), setLastModified: (function (key, lastModified) {
  _$jscoverage['cache/LocalCache.js'][85]++;
  if (this.isAvailable()) {
    _$jscoverage['cache/LocalCache.js'][86]++;
    key = this.getCacheKey(key);
    _$jscoverage['cache/LocalCache.js'][87]++;
    var cachedObj = dojox.storage.get(key);
    _$jscoverage['cache/LocalCache.js'][88]++;
    if ((cachedObj != null)) {
      _$jscoverage['cache/LocalCache.js'][89]++;
      cachedObj.lastModified = lastModified;
    }
    else {
      _$jscoverage['cache/LocalCache.js'][91]++;
      cachedObj = {lastModified: lastModified, value: null};
    }
    _$jscoverage['cache/LocalCache.js'][96]++;
    dojox.storage.put(key, cachedObj);
  }
}), clear: (function (key) {
  _$jscoverage['cache/LocalCache.js'][101]++;
  if (this.isAvailable()) {
    _$jscoverage['cache/LocalCache.js'][102]++;
    key = this.getCacheKey(key);
    _$jscoverage['cache/LocalCache.js'][103]++;
    dojox.storage.remove(key);
  }
}), updateCacheExpiration: (function (response) {
  _$jscoverage['cache/LocalCache.js'][108]++;
  this.lmMap = {};
  _$jscoverage['cache/LocalCache.js'][109]++;
  var lm = this.lmMap;
  _$jscoverage['cache/LocalCache.js'][110]++;
  $(response).find("cache-item").each((function () {
  _$jscoverage['cache/LocalCache.js'][113]++;
  var key = $(this).find("key").text();
  _$jscoverage['cache/LocalCache.js'][114]++;
  key = pentaho.common.localcache.getCacheKey(key);
  _$jscoverage['cache/LocalCache.js'][115]++;
  var lastModified = $(this).find("last-modified").text();
  _$jscoverage['cache/LocalCache.js'][117]++;
  lm[key] = lastModified;
  _$jscoverage['cache/LocalCache.js'][120]++;
  var cachedObj = pentaho.common.localcache.getValue(key);
  _$jscoverage['cache/LocalCache.js'][121]++;
  if (((cachedObj != null) && (pentaho.common.localcache.getLastModified(key) < lastModified))) {
    _$jscoverage['cache/LocalCache.js'][122]++;
    pentaho.common.localcache.clear(key);
    _$jscoverage['cache/LocalCache.js'][123]++;
    pentaho.common.localcache.setLastModified(key, lastModified);
  }
}));
}), refreshCacheExirations: (function () {
  _$jscoverage['cache/LocalCache.js'][139]++;
  if ((this.cacheHasBeenRefreshed == false)) {
    _$jscoverage['cache/LocalCache.js'][140]++;
    if (((window.pentahoCacheExpirationServiceResults != "undefined") && (window.pentahoCacheExpirationServiceResults != null))) {
      _$jscoverage['cache/LocalCache.js'][141]++;
      this.cacheHasBeenRefreshed = true;
      _$jscoverage['cache/LocalCache.js'][142]++;
      this.updateCacheExpiration(window.pentahoCacheExpirationServiceResults);
    }
  }
})};
