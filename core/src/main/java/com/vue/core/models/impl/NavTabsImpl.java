/*
 * ***********************************************************************
 * SPA Vue Project CONFIDENTIAL
 * ___________________
 *
 * Copyright 2022 SPA Vue Project.
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property
 * of SPA Vue Project and its suppliers, if any. The intellectual and
 * technical concepts contained herein are proprietary to SPA Vue Project
 * and its suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from SPA Vue Project.
 * ***********************************************************************
 */

package com.vue.core.models.impl;

import java.util.Collections;
import java.util.List;
import com.adobe.acs.commons.models.injectors.annotation.ChildResourceFromRequest;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.vue.core.models.Inputs;
import com.vue.core.models.NavTabs;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = {
    SlingHttpServletRequest.class
}, adapters = {
    NavTabs.class,
    ComponentExporter.class
})
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class NavTabsImpl
    implements NavTabs
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String tabName;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String buttonName;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private List<Inputs> inputs;
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("tabName")
    public String getTabName() {
        return tabName;
    }

    @Override
    @JsonProperty("buttonName")
    public String getButtonName() {
        return buttonName;
    }

    @Override
    public List<Inputs> getInputs() {
        return inputs != null ? Collections.unmodifiableList(inputs) : null;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
