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
if (! _$jscoverage['dojo/pentaho/common/MenuSeparator.js']) {
  _$jscoverage['dojo/pentaho/common/MenuSeparator.js'] = [];
  _$jscoverage['dojo/pentaho/common/MenuSeparator.js'][1] = 0;
  _$jscoverage['dojo/pentaho/common/MenuSeparator.js'][3] = 0;
}
_$jscoverage['dojo/pentaho/common/MenuSeparator.js'].source = ["dojo<span class=\"k\">.</span>provide<span class=\"k\">(</span><span class=\"s\">\"pentaho.common.MenuSeparator\"</span><span class=\"k\">);</span>","","dojo<span class=\"k\">.</span>declare<span class=\"k\">(</span><span class=\"s\">\"pentaho.common.MenuSeparator\"</span><span class=\"k\">,</span>","\t\tdijit<span class=\"k\">.</span>MenuSeparator<span class=\"k\">,</span>","\t\t<span class=\"k\">{</span>","\t\t<span class=\"c\">// summary:</span>","\t\t<span class=\"c\">//\t\tA line between two menu items</span>","","\t\ttemplateString<span class=\"k\">:</span> dojo<span class=\"k\">.</span>cache<span class=\"k\">(</span><span class=\"s\">\"pentaho.common\"</span><span class=\"k\">,</span> <span class=\"s\">\"MenuSeparator.html\"</span><span class=\"k\">)</span>","","\t<span class=\"k\">}</span>","<span class=\"k\">);</span>"];
_$jscoverage['dojo/pentaho/common/MenuSeparator.js'][1]++;
dojo.provide("pentaho.common.MenuSeparator");
_$jscoverage['dojo/pentaho/common/MenuSeparator.js'][3]++;
dojo.declare("pentaho.common.MenuSeparator", dijit.MenuSeparator, {templateString: dojo.cache("pentaho.common", "MenuSeparator.html")});
